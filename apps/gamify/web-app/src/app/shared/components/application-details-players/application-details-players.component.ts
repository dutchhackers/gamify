import { Component, OnInit } from '@angular/core';

export interface ApplicationUser {
  id: number;
  name: string;
  joinedAt: Date;
}

const ELEMENT_DATA: ApplicationUser[] = [
  {id: 1, name: 'Hydrogen', joinedAt: new Date()},
  {id: 2, name: 'Helium', joinedAt: new Date()},
];
@Component({
  selector: 'coders-application-details-players',
  templateUrl: './application-details-players.component.html',
  styleUrls: ['./application-details-players.component.scss']
})
export class ApplicationDetailsPlayersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'joinedAt', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
