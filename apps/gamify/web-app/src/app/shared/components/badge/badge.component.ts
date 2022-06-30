import { Component, Input } from '@angular/core';
import { BadgeTier } from '@gamify/shared';

@Component({
  selector: 'coders-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {

  @Input() name: string;
  @Input() tier: BadgeTier;
  @Input() small?: boolean;
  @Input() imageUrl?: string;
  @Input() amount?: number;
}
