import { Component, OnInit } from '@angular/core';
import { Application, ApplicationUser, Badge, BadgeTier, UserBadge } from '@gamify/shared';
import { combineLatestWith } from 'rxjs';
import { ApplicationService } from '../../../services/application.service';
import { AuthService } from '../../../services/auth.service';
import { BadgesService } from '../../../services/badges.service';
import { UsersService } from '../../../services/users.service';

interface UserApplicationProfile {
  application: Application,
  userApplication: ApplicationUser,
  badgesCount: {
    BRONZE: number,
    SILVER: number,
    GOLD: number,
    PLATINUM: number
  },
  obtainedBadges: { 
    [key: number]: {
      badge: Badge,
      amount: number
    }
  },
  unobtainedBadges: Badge[],

  obtainedBadgesCount: number,
  totalBadgesCount: number,
  obtainedPercentage: number,
}

interface Stats {
  totalBadges: number,
  totalGames: number,
  bronzeBadges: number,
  silverBadges: number,
  goldBadges: number,
  platinumBadges: number,
}

@Component({
  selector: 'coders-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  badgeTier = {
    "BRONZE": BadgeTier.BRONZE,
    "SILVER": BadgeTier.SILVER,
    "GOLD": BadgeTier.GOLD,
    "PLATINUM": BadgeTier.PLATINUM
  }

  favoriteBadges: {
    badge: Badge,
    amount: number
  }[] = [];

  stats: Stats = {
    totalBadges: 0,
    totalGames: 0,
    bronzeBadges: 0,
    silverBadges: 0,
    goldBadges: 0,
    platinumBadges: 0
  }

  userApplications: UserApplicationProfile[] = [];

  user$ = this.authService.getUser$();

  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly applicationService: ApplicationService,
    private readonly badgesService: BadgesService,
  ) {}

  ngOnInit(): void {
    const user = this.user$.getValue();

    const userApplications = this.usersService.listUserApplications$(user.id);
    const applications = this.applicationService.list$();
    const badges = this.badgesService.list$();
    const userBadges = this.usersService.listUserBadges$(user.id);
    
    userApplications.pipe(
      combineLatestWith(applications, badges, userBadges)
    ).subscribe(([userApplications, applications, badges, userBadges]) => {
      this.userApplications = this.aggregateUserApplications(userApplications, applications, badges, userBadges);
      console.log(this.userApplications);
      this.stats = this.calculateStats(userApplications, userBadges);
    });
  }

  private aggregateUserApplications(userApplications: ApplicationUser[], applications: Application[], badges: Badge[], userBadges: UserBadge[]): UserApplicationProfile[] {
    return userApplications.map(userApplication => {
      const application = applications.find(app => app.id === userApplication.applicationId);
      const applicationBadges = badges.filter(badge => badge.applicationId === application.id);
      const applicationUserBadges = userBadges.filter(userBadge => userBadge.badge.applicationId === application.id);
      
      const badgesCount = {
        BRONZE: 0,
        SILVER: 0,
        GOLD: 0,
        PLATINUM: 0
      }

      const obtainedBadges: {
        [key: number]: {
          badge: Badge,
          amount: number
        }
      } = {};
      let obtainedBadgesCount = 0;

      applicationUserBadges.forEach(userBadge => {
        badgesCount[userBadge.badge.tier] += 1;

        const badge = applicationBadges.find(badge => badge.id === userBadge.badgeId);

        if (! badge) {
          return;
        }

        if (obtainedBadges[badge.id]) {
          obtainedBadges[badge.id].amount += 1;
        } else {
          obtainedBadgesCount++;
          obtainedBadges[badge.id] = {
            badge,
            amount: 1
          }
        }
      });


      let obtainedPercentage = 0;
      if (applicationBadges.length > 0) {
        obtainedPercentage = Math.round((obtainedBadgesCount / applicationBadges.length) * 100);
      }

      const unobtainedBadges = applicationBadges.filter(badge => ! applicationUserBadges.find(userBadge => userBadge.badgeId === badge.id));

      return {
        application,
        userApplication,
        badgesCount,
        obtainedBadges,
        unobtainedBadges,
        obtainedBadgesCount,
        totalBadgesCount: applicationBadges.length,
        obtainedPercentage: obtainedPercentage
      }
    });
  }

  private calculateStats(userApplications: ApplicationUser[], userBadges: UserBadge[]): Stats {
    const stats = {
      totalBadges: 0,
      totalGames: 0,
      bronzeBadges: 0,
      silverBadges: 0,
      goldBadges: 0,
      platinumBadges: 0
    };

    stats.totalGames = userApplications.length;
    stats.totalBadges = userBadges.length;

    userBadges.forEach(userBadge => {
      switch (userBadge.badge.tier) {
        case BadgeTier.BRONZE:
          stats.bronzeBadges += 1;
          break;
        case BadgeTier.SILVER:
          stats.silverBadges += 1;
          break;
        case BadgeTier.GOLD:
          stats.goldBadges += 1;
          break;
        case BadgeTier.PLATINUM:
          stats.platinumBadges += 1;
          break;
      }
    });

    return stats;
  }

}
