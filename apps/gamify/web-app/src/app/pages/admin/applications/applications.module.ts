import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { DetailsComponent } from './details/details.component';
import { UiModule } from '../../../ui.module';
import { BadgeModalComponent } from '../../../shared/modals/badge-modal/badge-modal.component';

@NgModule({
  declarations: [
    DetailsComponent,
    BadgeModalComponent,
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ApplicationsModule { }
