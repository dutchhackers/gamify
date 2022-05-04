import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from '@gamify/shared';
import { Observable } from 'rxjs';
import { ApplicationService } from '../../../../services/application.service';

@Component({
  selector: 'coders-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  application: Application | undefined;
  application$: Observable<Application> = new Observable<Application>();

  constructor(private route: ActivatedRoute, private applicationService: ApplicationService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.application$ = this.applicationService.get$(params['id']);
      this.application$.subscribe(res => {
        this.application = res;
      });
    });
  }

  updateApplication($event: Application) {
    this.application = $event;
  }
}
