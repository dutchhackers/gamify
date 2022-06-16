import { Component, OnInit } from '@angular/core';
import { User } from '@gamify/shared';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'coders-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser$().subscribe(user => this.user = user);
  }

  public canModerate(): boolean {
    return this.authService.canModerate();
  }
}
