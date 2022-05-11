import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../confirm-modal/confirm-modal.component';

export interface UserBadge {
  id: number;
  name: string;
  amount: number;
}

const USER_BADGES: UserBadge[] = [
  {id: 1, name: 'Badge 1', amount: 1},
  {id: 2, name: 'Badge 2', amount: 2},
  {id: 3, name: 'Badge 3', amount: 3},
  {id: 4, name: 'Badge 4', amount: 4},
];

@Component({
  selector: 'coders-user-badges-modal',
  templateUrl: './user-badges-modal.component.html',
  styleUrls: ['./user-badges-modal.component.scss']
})
export class UserBadgesModalComponent {
  
  displayedColumns: string[] = ['name', 'amount', 'increaseDecrease', 'actions'];
  dataSource = USER_BADGES;

  constructor(
    public dialogRef: MatDialogRef<UserBadgesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
