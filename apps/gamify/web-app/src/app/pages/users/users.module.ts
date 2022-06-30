import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UiModule } from '../../ui.module';


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UiModule
  ]
})
export class UsersModule { }
