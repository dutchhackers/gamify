import { Component, Input } from '@angular/core';
import { User } from '@gamify/shared';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'coders-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() public user: User;

  constructor(private authService: AuthService) { }

  public canModerate(): boolean {
    return this.authService.canModerate();
  }
}
