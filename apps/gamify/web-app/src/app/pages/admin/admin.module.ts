import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationsComponent } from './applications/applications.component';
import { UiModule } from '../../ui.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ApplicationsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UiModule,
    RouterModule,
  ]
})
export class AdminModule { }
