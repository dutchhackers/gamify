import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'coders-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isOnAdminPage = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.me().pipe(
      catchError(error => {
        console.log(error);
        return of(error);
      })
    ).subscribe(user => {
      console.log(user);
    });


    this.router.events.subscribe(event => {
      if (! (event instanceof NavigationEnd)) {
        return;
      }
      this.isOnAdminPage = event.url.startsWith('/admin');
    });
  }
}
