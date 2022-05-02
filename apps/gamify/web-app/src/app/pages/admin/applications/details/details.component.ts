import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BadgeModalComponent } from '../../../../shared/modals/badge-modal/badge-modal.component';

interface Badge {
  id: number;
  name: string;
  tier: string;
  repeatedlyObtainable: boolean;
}

const BADGES: Badge[] = [
  { id: 1, name: 'Badge 1', tier: 'BRONZE', repeatedlyObtainable: true },
  { id: 2, name: 'Badge 2', tier: 'SILVER', repeatedlyObtainable: false },
  { id: 3, name: 'Badge 3', tier: 'GOLD', repeatedlyObtainable: false },
];

@Component({
  selector: 'coders-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  badgesDisplayedColumns: string[] = ['id', 'name', 'tier', 'repeatedlyObtainable', 'actions'];
  badgesDataSource = BADGES;

  badgeName = "";
  badgeTier = "";
  repeatedlyObtainable = false;

  constructor(public dialog: MatDialog) { }

  openCreateBadgeModal() {
    const dialogRef = this.dialog.open(BadgeModalComponent, {
      width: '400px',
      data: {
        action: 'create',
        name: '',
        tier: '',
        repeatedlyObtainable: false
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

  openEditBadgeModal(badgeId: number) {
    console.log('Edit badge: ' + badgeId);
    const badge = BADGES[badgeId - 1];
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
