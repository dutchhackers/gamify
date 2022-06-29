import { Component, Input } from '@angular/core';
import { ApplicationUser } from '@gamify/shared';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'coders-join-application-button',
  templateUrl: './join-application-button.component.html',
  styleUrls: ['./join-application-button.component.scss']
})
export class JoinApplicationButtonComponent {

  @Input() applicationId: number;
  @Input() applicationUsers: ApplicationUser[] = [];

  constructor(private readonly userService: UsersService) { }

  hasJoinedApplication(applicationId: number) {
    return this.applicationUsers.some(applicationUser => applicationUser.applicationId === applicationId);
  }

  joinApplication(applicationId: number) {
    this.userService.joinApplication$(applicationId).subscribe(applicationUser => {
      this.applicationUsers.push(applicationUser);
    });
  }
}
