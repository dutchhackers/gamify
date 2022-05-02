import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
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
    {value: 'Bronze', viewValue: 'Bronze'},
    {value: 'Silver', viewValue: 'Silver'},
    {value: 'Gold', viewValue: 'Gold'},
    {value: 'Platinum', viewValue: 'Platinum'},
  ];

  constructor(
    public dialogRef: MatDialogRef<BadgeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
