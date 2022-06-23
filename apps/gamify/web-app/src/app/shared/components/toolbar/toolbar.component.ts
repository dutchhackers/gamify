import { Component } from '@angular/core';
import { User } from '@gamify/shared';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'coders-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  user$: BehaviorSubject<User> = this.authService.getUser$();

  constructor(private authService: AuthService) { }

  public canModerate(): boolean {
    return this.authService.canModerate();
  }
}
