import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LoginComponent } from './pages/auth/login/login.component';
import { UnauthorizedInterceptor } from './core/interceptors/unauthorized.interceptor';
import { PagesModule } from './pages/pages.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, LoginComponent, NotFoundComponent],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    PagesModule, 
    BrowserAnimationsModule,
    UiModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
