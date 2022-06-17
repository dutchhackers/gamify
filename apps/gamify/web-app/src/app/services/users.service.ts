import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserBadge } from '@gamify/shared';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  listUserBadges$(userId: number, applicationId?: number): Observable<UserBadge[]> {
    let params = '';
    if (applicationId) {
      params = `?applicationId=${applicationId}`;
    }
    return this.http.get<UserBadge[]>(`${environment.apiUrl}/users/${userId}/badges${params}`);
  }

  assignBadgeToUser$(userId: number, badgeId: number): Observable<UserBadge> {
    return this.http.post<UserBadge>(`${environment.apiUrl}/users/${userId}/badges`, { badgeId });
  }

  removeUserBadge$(userBadge: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/users/badges/${userBadge}`);
  }
}
