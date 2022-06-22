import { Component, OnInit } from '@angular/core';
import { BadgeTier } from '@gamify/shared';

@Component({
  selector: 'coders-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  badgeTier = {
    "BRONZE": BadgeTier.BRONZE,
    "SILVER": BadgeTier.SILVER,
    "GOLD": BadgeTier.GOLD,
    "PLATINUM": BadgeTier.PLATINUM
  }

  constructor() { }

  ngOnInit(): void {
  }

}
