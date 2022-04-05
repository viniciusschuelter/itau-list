import {NgModule} from "@angular/core";
import {BusinessDetailsComponent} from "./business-details.component";
import {CommonModule} from "@angular/common";
import {BusinessFormModule} from "../../components/business-form/business-form.module";


@NgModule({
  declarations: [BusinessDetailsComponent],
  exports: [BusinessDetailsComponent],
    imports: [
        CommonModule,
        BusinessFormModule
    ]
})
export class BusinessDetailsModule { }
