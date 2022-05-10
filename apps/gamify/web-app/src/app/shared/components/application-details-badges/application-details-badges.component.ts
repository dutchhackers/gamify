import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Badge, BadgeTier } from '@gamify/shared';
import { catchError, throwError } from 'rxjs';
import { BadgeDialogData } from '../../../core/interfaces/badge-dialog-data.interface';
import { BadgesService } from '../../../services/badges.service';
import { BadgeModalComponent } from '../../modals/badge-modal/badge-modal.component';

@Component({
  selector: 'coders-application-details-badges',
  templateUrl: './application-details-badges.component.html',
  styleUrls: ['./application-details-badges.component.scss']
})
export class ApplicationDetailsBadgesComponent implements OnInit {

  @Input() applicationId = 0;

  badgesDisplayedColumns: string[] = ['id', 'name', 'tier', 'repeatedlyObtainable', 'actions'];
  badgesDataSource: Badge[] = [];
  @ViewChild('badgesTable') badgesTable: any;

  badgeName = "";
  badgeTier = BadgeTier.BRONZE;
  repeatedlyObtainable = false;

  constructor(
    public dialog: MatDialog, 
    private badgesService: BadgesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.badgesService.list$().subscribe(res => {
      this.badgesDataSource = res;
    });
  }

  openCreateBadgeModal(payload?: { name: string, tier: BadgeTier, repeatedlyObtainable: boolean, error?: string|string[] }) {
    const data: BadgeDialogData = {
      action: 'create',
      name: '',
      tier: '',
      repeatedlyObtainable: false,
      error: undefined

    }
    if (payload) {
      data.name = payload.name;
      data.tier = payload.tier;
      data.repeatedlyObtainable = payload.repeatedlyObtainable;

      if (payload.error) {
        data.error = payload.error;
      }
    }

    const dialogRef = this.dialog.open(BadgeModalComponent, {
      width: '400px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (! result) {
        return;
      }
      console.log(result);
      this.badgeName = result.name;
      this.badgeTier = result.tier;
      this.repeatedlyObtainable = result.repeatedlyObtainable;

      this.badgesService.create$({
        name: this.badgeName,
        tier: this.badgeTier, 
        applicationId: this.applicationId, 
        repeatedlyObtainable: this.repeatedlyObtainable
      }).pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('Error creating badge');

          this.openCreateBadgeModal({
            name: this.badgeName,
            tier: this.badgeTier,
            repeatedlyObtainable: this.repeatedlyObtainable,
            error: err.error.message
          });

          return throwError(() => new Error(err.error.message));
        })
      ).subscribe(res => {
        this.badgesDataSource.push(res);
        this.badgesTable.renderRows();
        this.snackBar.open('Badge succesfully created!', 'Close', {
          horizontalPosition: 'center',	
          verticalPosition: 'top',
          duration: 3000
        });
      });
    });
  }

  openEditBadgeModal(badgeId: number) {
    console.log('Edit badge: ' + badgeId);
    const badge = this.badgesDataSource[badgeId - 1];
    const dialogRef = this.dialog.open(BadgeModalComponent, {
      width: '400px',
      data: {
        action: 'edit',
        name: badge.name,
        tier: badge.tier,
        repeatedlyObtainable: badge.repeatedlyObtainable
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (! result) {
        return;
      }
      console.log(result);
      this.badgeName = result.name;
      this.badgeTier = result.tier;
      this.repeatedlyObtainable = result.repeatedlyObtainable;
    });
  }
}
