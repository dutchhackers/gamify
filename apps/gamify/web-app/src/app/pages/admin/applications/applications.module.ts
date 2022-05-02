import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { DetailsComponent } from './details/details.component';
import { UiModule } from '../../../ui.module';
import { BadgeModalComponent } from '../../../shared/modals/badge-modal/badge-modal.component';
import { ApplicationDetailsBadgesComponent } from '../../../shared/components/application-details-badges/application-details-badges.component';
import { ApplicationDetailsGeneralComponent } from '../../../shared/components/application-details-general/application-details-general.component';
import { ApplicationDetailsPlayersComponent } from '../../../shared/components/application-details-players/application-details-players.component';
import { ApplicationDetailsModeratorsComponent } from '../../../shared/components/application-details-moderators/application-details-moderators.component';

@NgModule({
  declarations: [
    DetailsComponent,
    BadgeModalComponent,
    ApplicationDetailsGeneralComponent,
    ApplicationDetailsBadgesComponent,
    ApplicationDetailsPlayersComponent,
    ApplicationDetailsModeratorsComponent,
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
