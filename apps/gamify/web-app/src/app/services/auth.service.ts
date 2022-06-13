import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, User } from '@gamify/shared';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;

  private user: User;

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getUser(): User {
    return this.user;
  }

  canModerate(): boolean {
    if (! this.user) return false;

    switch (this.user.moderationRole) {
      case 'ADMIN':
      case 'MODERATOR':
        return true;
    }
    return false;
  }

  attemptLogin(body: { email: string; password: string }) {
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
        localStorage.setItem('accessToken', res.idToken);
        localStorage.setItem('refreshToken', res.refreshToken);
      })
    )
  }

  me(): Observable<User> {
    return this.http.get<IUser>(`${environment.apiUrl}/users/me`).pipe(
      map(res => res as User),
      tap(user => {
        this.user = user;
        this.authenticated = true;
      }),
    )
  }
}
