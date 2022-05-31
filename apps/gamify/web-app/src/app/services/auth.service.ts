import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;

  constructor(private http: HttpClient) {

  }


  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  attemptLogin(body: { email: string; password: string }) {
    console.log('attempt login');

    const options = {
      headers: new HttpHeaders().set('Content-type', 'application/json'),
    };

    const login = {
      email: body.email,
      password: body.password,
      returnSecureToken: true
    }

    return this.http.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.clientId}`, login, options).pipe(
      tap((res: { idToken: string; refreshToken: string; expiresIn: number; }) => {
        console.log('Successfull login!');
        localStorage.setItem('accessToken', res.idToken);
        localStorage.setItem('refreshToken', res.refreshToken);
      })
    )
  }
}
