import { Component } from '@angular/core';

export interface Application {
  id: number;
  name: string;
  type: string;
  players: number;
  badges: number;
}

const ELEMENT_DATA: Application[] = [
  {id: 1, name: 'Walking Challenge', type: "GAME", players: 5, badges: 10},
];

@Component({
  selector: 'coders-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {

  displayedColumns: string[] = ['id', 'name', 'type', 'players', 'badges', 'actions'];

  dataSource = ELEMENT_DATA;
}
