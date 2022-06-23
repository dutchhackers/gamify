import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UiModule } from "../ui.module";
import { ApplicationsComponent } from "./applications/applications.component";
import { PagesRoutingModule } from "./pages-router.module";

@NgModule({
    declarations: [
        ApplicationsComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        UiModule,
    ]
})
export class PagesModule {}