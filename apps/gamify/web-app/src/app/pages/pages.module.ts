import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UiModule } from "../ui.module";
import { PagesRoutingModule } from "./pages-router.module";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        UiModule,
    ]
})
export class PagesModule {}