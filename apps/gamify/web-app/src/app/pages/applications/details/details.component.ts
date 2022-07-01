import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Application, ApplicationUser, Badge, UserBadge } from '@gamify/shared';
import { catchError, throwError, combineLatestWith } from 'rxjs';
import { ObtainedBadges } from '../../../core/interfaces';
import { ApplicationService } from '../../../services/application.service';
import { AuthService } from '../../../services/auth.service';
import { BadgesService } from '../../../services/badges.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'coders-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  applicationId: number;
  applicationUsers: ApplicationUser[] = [];
  application: Application;

  availableBadges: Badge[] = [];

  hasJoinedApplication = false;

  userBadges: UserBadge[] = [];

  obtainedBadges: ObtainedBadges = {};
  badgesStats: {
    totalBadges: number,
    obtainedBadges: number,
    obtainedPercentage: number,
  } = {
    totalBadges: 0,
    obtainedBadges: 0,
    obtainedPercentage: 0,
  }

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private readonly applicationService: ApplicationService,
    private readonly badgesService: BadgesService
  ) { }

  ngOnInit(): void {
    const user = this.authService.getUser$().getValue();

    this.route.params.subscribe(params => {
      this.applicationId = parseInt(params['id']);
      if (isNaN(this.applicationId)) this.applicationId = 0;

      this.applicationService.get$(this.applicationId).pipe(
        catchError(error => {
          this.snackBar.open('Error retrieving application, going back to overview', 'Close', {
            horizontalPosition: 'center',	
            verticalPosition: 'top',
            duration: 3000
          });
          this.router.navigate(['/applications']);
          return throwError(() => new Error(error));
        })
      ).subscribe(application => {
        this.application = application;
      });

      this.usersService.listUserApplications$(user.id).subscribe(applicationUsers => {
        this.applicationUsers = applicationUsers;
        this.hasJoinedApplication = applicationUsers.some(applicationUser => applicationUser.applicationId === this.applicationId);

        if (this.hasJoinedApplication) {
          this.usersService.listUserBadges$(user.id).subscribe(badges => {
            this.userBadges = badges;
          });
        }
      });

      this.badgesService.list$(this.applicationId).subscribe(badges => {
        this.availableBadges = badges;
      });

      const userBadges = this.usersService.listUserBadges$(user.id, this.applicationId);
      const badges = this.badgesService.list$(this.applicationId);

      userBadges.pipe(
        combineLatestWith(badges)
      ).subscribe(([userBadges, badges]) => {
        this.obtainedBadges = this.badgesService.calculateObtainedBadges(userBadges, badges);
        this.badgesStats.obtainedBadges = Object.keys(this.obtainedBadges).length;
        this.badgesStats.obtainedPercentage = this.badgesService.calculateObtainedPercentage(this.obtainedBadges, badges.length);
        this.badgesStats.totalBadges = badges.length;
      });

    });
  }

}
