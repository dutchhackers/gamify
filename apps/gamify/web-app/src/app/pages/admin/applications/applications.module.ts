import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { DetailsComponent } from './details/details.component';
import { UiModule } from '../../../ui.module';
import { BadgeModalComponent } from '../../../shared/modals/badge-modal/badge-modal.component';
import { ApplicationDetailsBadgesComponent } from '../../../shared/components/application-details-badges/application-details-badges.component';
import { ApplicationDetailsGeneralComponent } from '../../../shared/components/application-details-general/application-details-general.component';
import { ApplicationDetailsUsersComponent } from '../../../shared/components/application-details-users/application-details-users.component';
import { ApplicationDetailsModeratorsComponent } from '../../../shared/components/application-details-moderators/application-details-moderators.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { ConfirmModalComponent } from '../../../shared/modals/confirm-modal/confirm-modal.component';
import { UserBadgesModalComponent } from '../../../shared/modals/user-badges-modal/user-badges-modal.component';

@NgModule({
  declarations: [
    DetailsComponent,
    CreateApplicationComponent,
    BadgeModalComponent,
    ConfirmModalComponent,
    ApplicationDetailsGeneralComponent,
    ApplicationDetailsBadgesComponent,
    ApplicationDetailsUsersComponent,
    ApplicationDetailsModeratorsComponent,
    UserBadgesModalComponent,
    
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
