import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './pages/admin/admin.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    AdminModule, 
    BrowserAnimationsModule,
    UiModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
