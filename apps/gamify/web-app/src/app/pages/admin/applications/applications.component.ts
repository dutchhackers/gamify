import { Component, OnDestroy, OnInit } from '@angular/core';
import { Application } from '@gamify/shared';
import { Subscription } from 'rxjs';
import { ApplicationService } from '../../../services/application.service';

@Component({
  selector: 'coders-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'type', 'players', 'badges', 'actions'];

  dataSource: Application[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.subscriptions = this.applicationService.list$().subscribe(res => {
      this.dataSource = res;
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
