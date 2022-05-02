import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'coders-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gamify-web-app';

  isOnAdminPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (! (event instanceof NavigationEnd)) {
        return;
      }
      this.isOnAdminPage = event.url.startsWith('/admin');
    });
  }
}
