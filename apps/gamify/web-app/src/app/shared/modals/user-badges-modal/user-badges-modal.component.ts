import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplicationUser, Badge } from '@gamify/shared';
import { catchError, Subject, throwError } from 'rxjs';
import { UsersService } from '../../../services/users.service';

interface UserBadgesDialogData {
  user: ApplicationUser,
  applicationId: number,
  badges: Badge[],
}

@Component({
  selector: 'coders-user-badges-modal',
  templateUrl: './user-badges-modal.component.html',
  styleUrls: ['./user-badges-modal.component.scss']
})
export class UserBadgesModalComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'tier', 'earnedAt', 'actions'];
  dataSource = [];

  form = new FormGroup({
    "badge": new FormControl("", Validators.required),
  })

  @ViewChild('userBadgesTable') badgesTable: any;

  errorMessage$: Subject<string|string[]> = new Subject<string|string[]>();
  errorMessage: string|string[] = [];

  constructor(
    public dialogRef: MatDialogRef<UserBadgesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserBadgesDialogData,
    private usersService: UsersService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.usersService.listUserBadges$(this.data.user.userId, this.data.applicationId).subscribe(res => {
      this.dataSource = res;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  assignBadge() {
    this.errorMessage$.next([]);
    this.usersService.assignBadgeToUser$(this.data.user.userId, this.form.value.badge).pipe(
      catchError((err: HttpErrorResponse) => {
        this.errorMessage$.next(err.error.message);
        return throwError(() => new Error(err.error.message));
      })
    ).subscribe(res => {
      const badge = this.data.badges.filter(badge => badge.id === this.form.value.badge)[0];
      this.dataSource.push({
        id: res.id,
        badgeId: res.badgeId,
        userId: res.userId,
        earnedAt: res.earnedAt,
        badge: {
          name: badge.name,
          tier: badge.tier,
          applicationId: badge.applicationId
        }
      });
      this.badgesTable.renderRows();
      this.snackBar.open('Badge successfully assigned', 'Close', {
        horizontalPosition: 'center',	
        verticalPosition: 'top',
        duration: 3000
      });
    });
  }

  removeBadge(userBadgeId: number) {
    this.usersService.removeUserBadge$(userBadgeId).pipe(
      catchError((err: HttpErrorResponse) => {
        this.errorMessage$.next(err.error.message);
        return throwError(() => new Error(err.error.message));
      })
    ).subscribe(res => {
      this.dataSource = this.dataSource.filter(badge => badge.id !== userBadgeId);
      this.badgesTable.renderRows();
      this.snackBar.open('Badge successfully removed', 'Close', {
        horizontalPosition: 'center',	
        verticalPosition: 'top',
        duration: 3000
      });
    });
  }
}
