import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Badge, IBadge, BadgeTier } from '@gamify/shared';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const BADGES_API_PATH = '/badges';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor(private http: HttpClient) { }

  list$(applicationId?: number): Observable<Badge[]> {
    let params = '';
    if (applicationId) {
      params = `?applicationId=${applicationId}`;
    }
    return this.http.get<IBadge[]>(`${environment.apiUrl}${BADGES_API_PATH}${params}`).pipe(
      map(res => res as Badge[])
    )
  }

  get$(id: number): Observable<Badge> {
    return this.http.get<IBadge>(`${environment.apiUrl}${BADGES_API_PATH}/${id}`).pipe(
      map(res => res as Badge)
    )
  }

  create$(payload: { name: string, tier: BadgeTier, applicationId: number, repeatedlyObtainable: boolean }): Observable<Badge> {
    return this.http.post<IBadge>(`${environment.apiUrl}${BADGES_API_PATH}`, payload).pipe(
      map(res => res as Badge)
    )
  }

  update$(id: number, payload: { name: string, tier: BadgeTier, repeatedlyObtainable: boolean }): Observable<Badge> {
    return this.http.put<IBadge>(`${environment.apiUrl}${BADGES_API_PATH}/${id}`, payload).pipe(
      map(res => res as Badge)
    )
  }

  delete$(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}${BADGES_API_PATH}/${id}`)
  }
}
