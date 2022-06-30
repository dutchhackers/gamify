import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Badge, IBadge, BadgeTier, UserBadge } from '@gamify/shared';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BadgesPerTier, ObtainedBadges } from '../core/interfaces';

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
    return this.http.get<Badge[]>(`${environment.apiUrl}${BADGES_API_PATH}${params}`).pipe(
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

  calculateObtainedBadges(userBadge: UserBadge[], badges: Badge[]): ObtainedBadges {
    const obtainedBadges = {};

    userBadge.forEach(userBadge => {
      const badge = badges.find(badge => badge.id === userBadge.badgeId);

      if (! badge) {
        return;
      }

      if (obtainedBadges[badge.id]) {
        obtainedBadges[badge.id].amount += 1;
      } else {
        obtainedBadges[badge.id] = {
          badge,
          amount: 1
        }
      }
    });

    return obtainedBadges;
  }

  calculateObtainedPercentage(obtainedBadges: ObtainedBadges, totalBadgesCount: number): number {
    if (totalBadgesCount === 0) {
      return 0;
    }
    return Math.round((Object.keys(obtainedBadges).length / totalBadgesCount) * 100);
  }

  calculateBadgesPerTier(userBadges: UserBadge[]): BadgesPerTier {
    const badgesPerTier = {
      BRONZE: 0,
      SILVER: 0,
      GOLD: 0,
      PLATINUM: 0
    }

    userBadges.forEach(userBadge => {
      badgesPerTier[userBadge.badge.tier] += 1;
    });

    return badgesPerTier;
  }
}
