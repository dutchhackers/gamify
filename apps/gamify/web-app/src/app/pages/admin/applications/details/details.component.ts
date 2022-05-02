import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BadgeModalComponent } from '../../../../shared/modals/badge-modal/badge-modal.component';

@Component({
  selector: 'coders-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  badgesDisplayedColumns: string[] = ['id', 'name', 'tier', 'repeatedlyObtainable', 'actions'];
  badgesDataSource = [{
    id: 1,
    name: 'Badge 1',
    tier: 'Bronze',
    repeatedlyObtainable: true
  }]

  badgeName = "";
  badgeTier = "";
  repeatlyObtainable = false;

  constructor(public dialog: MatDialog) { }

  openBadgeModal() {
    const dialogRef = this.dialog.open(BadgeModalComponent, {
      width: '400px',
      data: {
        name: this.badgeName,
        tier: this.badgeTier,
        repeatedlyObtainable: this.repeatlyObtainable
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
      this.repeatlyObtainable = result.repeatedlyObtainable;
    });
  }

}
