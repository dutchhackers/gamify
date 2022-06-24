import { Component, OnInit } from '@angular/core';
import { Application, ApplicationUser, Badge, BadgeTier, UserBadge } from '@gamify/shared';
import { combineLatestWith } from 'rxjs';
import { ApplicationService } from '../../../services/application.service';
import { AuthService } from '../../../services/auth.service';
import { BadgesService } from '../../../services/badges.service';
import { UsersService } from '../../../services/users.service';

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

  stats: {
    totalBadges: number,
    totalGames: number,
    bronzeBadges: number,
    silverBadges: number,
    goldBadges: number,
    platinumBadges: number,
  }

  userApplications: {
    application: Application,
    userApplication: ApplicationUser,
    badgesCount: {
      bronze: number,
      silver: number,
      gold: number,
      platinum: number
    },
    obtainedBadges: {
      badge: Badge,
      amount: number
    }[],
    unobtainedBadges: Badge[]
  }[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly applicationService: ApplicationService,
    private readonly badgesService: BadgesService,
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser$().getValue();

    const userApplications = this.usersService.listUserApplications$(user.id);
    const applications = this.applicationService.list$();
    const badges = this.badgesService.list$();
    const userBadges = this.usersService.listUserBadges$(user.id);
    

    userApplications.pipe(
      combineLatestWith(applications, badges, userBadges)
    ).subscribe(([userApplications, applications, badges, userBadges]) => {


      const blah = userApplications.map(userApplication => {
        const application = applications.find(app => app.id === userApplication.applicationId);
        const applicationBadges = badges.filter(badge => badge.applicationId === application.id);
        const applicationUserBadges = userBadges.filter(userBadge => userBadge.badge.applicationId === application.id);
        
        const badgesCount = {
          bronze: 0,
          silver: 0,
          gold: 0,
          platinum: 0
        }

        const obtainedBadges: {
          badge: Badge,
          amount: number
        }[] = [];

        applicationUserBadges.forEach(userBadge => {
          badgesCount[userBadge.badge.tier] += 1;

          const badge = applicationBadges.find(badge => badge.id === userBadge.badgeId);
          // obtainedBadges.push({
          //   badge: badge,
          //   // amount: userBadge.amount
          // });
        });

        return {
          application,
          userApplication,
          badgesCount
        }
      });

      console.log(userApplications);
      console.log(applications);
      console.log(badges);
      console.log(userBadges);
    });
  }

}
