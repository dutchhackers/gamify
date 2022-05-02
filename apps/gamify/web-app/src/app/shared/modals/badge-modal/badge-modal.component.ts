import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  action: 'create' | 'edit';
  name: string;
  tier: string;
  repeatedlyObtainable: boolean;
}

interface Tier {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'coders-badge-modal',
  templateUrl: './badge-modal.component.html',
  styleUrls: ['./badge-modal.component.scss']
})
export class BadgeModalComponent {

  tiers: Tier[] = [
    {value: 'BRONZE', viewValue: 'Bronze'},
    {value: 'SILVER', viewValue: 'Silver'},
    {value: 'GOLD', viewValue: 'Gold'},
    {value: 'PLATINUM', viewValue: 'Platinum'},
  ];

  constructor(
    public dialogRef: MatDialogRef<BadgeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    console.log(data.action);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
