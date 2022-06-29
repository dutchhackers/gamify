import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Application, ApplicationUser } from '@gamify/shared';
import { catchError, throwError } from 'rxjs';
import { ApplicationService } from '../../../services/application.service';
import { AuthService } from '../../../services/auth.service';
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

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private readonly applicationService: ApplicationService,
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
      });
    })
  }

}
