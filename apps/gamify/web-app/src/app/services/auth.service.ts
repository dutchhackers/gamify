import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;

  constructor() { }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public attemptLogin(email: string, password: string): boolean {
  
    return false;
  }
}
