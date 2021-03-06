import {NgModule} from "@angular/core";
import {BusinessDetailsComponent} from "./business-details.component";
import {CommonModule} from "@angular/common";
import {BusinessFormModule} from "../../components/business-form/business-form.module";
import {TitleModule} from "../../layout/title/title.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [BusinessDetailsComponent],
  exports: [BusinessDetailsComponent],
  imports: [
    CommonModule,
    BusinessFormModule,
    TitleModule,
    MatButtonModule
  ]
})
export class BusinessDetailsModule { }
