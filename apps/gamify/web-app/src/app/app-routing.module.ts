import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "dashboard",
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: "admin",
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: "**",
        redirectTo: "dashboard" // TODO: 404 page
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }