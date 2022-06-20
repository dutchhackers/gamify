import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Badge, BadgeTier } from '@gamify/shared';
import { catchError, throwError } from 'rxjs';
import { BadgeDialogData } from '../../../core/interfaces/badge-dialog-data.interface';
import { BadgesService } from '../../../services/badges.service';
import { BadgeModalComponent } from '../../modals/badge-modal/badge-modal.component';
import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'coders-application-details-badges',
  templateUrl: './application-details-badges.component.html',
  styleUrls: ['./application-details-badges.component.scss']
})
export class ApplicationDetailsBadgesComponent implements OnInit {

  @Input() applicationId = 0;

  badgesDisplayedColumns: string[] = ['name', 'tier', 'repeatedlyObtainable', 'actions'];
  badgesDataSource: Badge[] = [];
  @ViewChild('badgesTable') badgesTable: any;

  @Output() badgesUpdate: EventEmitter<Badge[]> = new EventEmitter<Badge[]>();

  constructor(
    public dialog: MatDialog, 
    private badgesService: BadgesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    console.log('Application id: ' + this.applicationId);
    this.badgesService.list$(this.applicationId).subscribe(res => {
      this.badgesDataSource = res;
      this.badgesUpdate.emit(this.badgesDataSource);
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

      this.badgesService.create$({
        name: result.name,
        tier: result.tier, 
        applicationId: this.applicationId, 
        repeatedlyObtainable: result.repeatedlyObtainable
      }).pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('Error creating badge');

          this.openCreateBadgeModal({
            name: result.name,
            tier: result.tier, 
            repeatedlyObtainable: result.repeatedlyObtainable,
            error: err.error.message
          });

          return throwError(() => new Error(err.error.message));
        })
      ).subscribe(res => {
        this.badgesDataSource.push(res);
        this.badgesUpdate.emit(this.badgesDataSource);
        this.badgesTable.renderRows();
        this.snackBar.open('Badge succesfully created!', 'Close', {
          horizontalPosition: 'center',	
          verticalPosition: 'top',
          duration: 3000
        });
      });
    });
  }

  openEditBadgeModal(badgeId: number, payload?: { name: string, tier: BadgeTier, repeatedlyObtainable: boolean, error?: string|string[] }) {
    console.log('Edit badge: ' + badgeId);
    const badge = this.badgesDataSource.find(badge => badge.id === badgeId);
  
    if (!badge) return;

    const data: BadgeDialogData = {
      action: 'edit',
      name: badge.name,
      tier: badge.tier,
      repeatedlyObtainable: badge.repeatedlyObtainable,
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
      this.badgesService.update$(badgeId, {
        name: result.name,
        tier: result.tier,
        repeatedlyObtainable: result.repeatedlyObtainable
      }).pipe(
        catchError((err: HttpErrorResponse) => {
          this.openEditBadgeModal(badgeId,{
            name: result.name,
            tier: result.tier, 
            repeatedlyObtainable: result.repeatedlyObtainable,
            error: err.error.message
          });
          
          return throwError(() => new Error(err.error.message));
        })
      ).subscribe(res => {
        this.badgesDataSource = this.badgesDataSource.map(badge => {
          if (badge.id === res.id) {
            return res;
          }
          return badge;
        });
        this.badgesUpdate.emit(this.badgesDataSource);
        this.badgesTable.renderRows();
        this.snackBar.open('Badge succesfully edited!', 'Close', {
          horizontalPosition: 'center',	
          verticalPosition: 'top',
          duration: 3000
        });
      });
    });
  }

  openDeleteBadgeModal(badgeId: number) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '400px',
      data: {
        title: 'Delete badge',
        message: 'Are you sure you want to delete this badge? Every user who obtained this badge will lose it.',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'confirm') return;

      this.badgesService.delete$(badgeId).subscribe(() => {
        this.badgesDataSource = this.badgesDataSource.filter(item => item.id !== badgeId);
        this.badgesUpdate.emit(this.badgesDataSource);
        this.badgesTable.renderRows();
        this.snackBar.open('Badge succesfully deleted!', 'Close', {
          horizontalPosition: 'center',	
          verticalPosition: 'top',
          duration: 3000
        });
      });
    });
  }
}
