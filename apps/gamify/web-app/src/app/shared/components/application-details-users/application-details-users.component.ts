import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationUser, Badge } from '@gamify/shared';
import { ApplicationService } from '../../../services/application.service';
import { BadgesService } from '../../../services/badges.service';
import { UserBadgesModalComponent } from '../../modals/user-badges-modal/user-badges-modal.component';

@Component({
  selector: 'coders-application-details-users',
  templateUrl: './application-details-users.component.html',
  styleUrls: ['./application-details-users.component.scss']
})
export class ApplicationDetailsUsersComponent implements OnInit {
  
  @Input() applicationId = 0;

  displayedColumns: string[] = ['name', 'joinedAt', 'actions'];
  dataSource = [];

  badges: Badge[] = [];

  constructor(
    public dialog: MatDialog, 
    private applicationService: ApplicationService,
    private badgesService: BadgesService
  ) { }

  ngOnInit(): void {
    this.applicationService.listUsers$(this.applicationId).subscribe(res => {
      this.dataSource = res;
    });
    this.badgesService.list$(this.applicationId).subscribe(res => {
      this.badges = res;
    }) 
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
