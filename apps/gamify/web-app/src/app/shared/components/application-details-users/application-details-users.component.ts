import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationUser, Badge } from '@gamify/shared';
import { ApplicationService } from '../../../services/application.service';
import { UserBadgesModalComponent } from '../../modals/user-badges-modal/user-badges-modal.component';

@Component({
  selector: 'coders-application-details-users',
  templateUrl: './application-details-users.component.html',
  styleUrls: ['./application-details-users.component.scss']
})
export class ApplicationDetailsUsersComponent implements OnInit {
  
  @Input() applicationId = 0;
  @Input() badges: Badge[] = [];

  displayedColumns: string[] = ['name', 'joinedAt', 'actions'];
  dataSource = [];

  constructor(
    public dialog: MatDialog, 
    private applicationService: ApplicationService,
  ) { }

  ngOnInit(): void {
    this.applicationService.listUsers$(this.applicationId).subscribe(res => {
      this.dataSource = res;
    });
  }

  openManageBadgesModal(user: ApplicationUser) {
    this.dialog.open(UserBadgesModalComponent, {
      width: '600px',
      data: {
        user,
        applicationId: this.applicationId,
        badges: this.badges
      }
    });
  }
}
