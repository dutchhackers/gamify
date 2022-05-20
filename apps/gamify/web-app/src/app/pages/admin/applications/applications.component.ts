import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Application } from '@gamify/shared';
import { ApplicationService } from '../../../services/application.service';
import { ConfirmModalComponent } from '../../../shared/modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'coders-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type', 'players', 'badges', 'actions'];

  dataSource: Application[] = [];

  constructor(private applicationService: ApplicationService, public dialog: MatDialog) { }

  ngOnInit() {
    this.applicationService.list$().subscribe(res => {
      this.dataSource = res;
    });
  }

  openDeleteDialog(application: Application) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '400px',
      data: {
        title: 'Delete application',
        message: 'Are you sure you want to delete this application?',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'confirm') return;

      this.applicationService.delete$(application.id).subscribe(() => {
        console.log('Application deleted');
        this.dataSource = this.dataSource.filter(item => item.id !== application.id);
      });
    });
  }
}
