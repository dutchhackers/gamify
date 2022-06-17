import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from '@gamify/shared';
import { catchError, finalize, of } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'coders-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  user: User;

  isOnAdminPage = false;

  uiSettings = {
    showSpinner: true,
    showAppWrapper: false
  }

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.startAuthentication();
    this.checkRouterData()
  }

  private startAuthentication() {
    this.authService.me().pipe(
      catchError(error => {
        console.log(error);
        return of(error);
      }),
      finalize(() => {
        this.uiSettings.showSpinner = false;
      })
    ).subscribe(user => {
      this.user = user;
    });
  }

  private checkRouterData() {
    this.router.events.subscribe(event => {
      if (! (event instanceof NavigationEnd)) {
        return;
      }
      this.isOnAdminPage = event.url.startsWith('/admin');

      if (event.url === '/login') {
        this.uiSettings.showAppWrapper = false;
      } else {
        this.uiSettings.showAppWrapper = true;
      }
    });
  }
}
