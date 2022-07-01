import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UiModule } from "../../ui.module";
import { ApplicationsRoutingModule } from "./applications-routing.module";
import { ApplicationsComponent } from "./applications.component";
import { DetailsComponent } from "./details/details.component";

@NgModule({
    declarations: [
        ApplicationsComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        ApplicationsRoutingModule,
        UiModule
    ],
})
export class ApplicationsModule {}