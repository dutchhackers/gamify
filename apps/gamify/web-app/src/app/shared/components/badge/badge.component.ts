import { Component, Input, OnInit } from '@angular/core';
import { BadgeTier } from '@gamify/shared';

@Component({
  selector: 'coders-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() name: string;
  @Input() tier: BadgeTier;
  @Input() large?: boolean;
  @Input() imageUrl?: string;
  @Input() amount?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
