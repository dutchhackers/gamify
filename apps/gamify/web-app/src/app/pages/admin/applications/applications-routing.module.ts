import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: "",
    component: ApplicationsComponent
  },
  {
    path: "create",
    component: CreateApplicationComponent
  },
  {
    path: ":id",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
