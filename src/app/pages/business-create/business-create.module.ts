import {NgModule} from "@angular/core";
import {BusinessCreateComponent} from "./business-create.component";
import {CommonModule} from "@angular/common";
import {BusinessFormModule} from "../../components/business-form/business-form.module";
import {TitleModule} from "../../layout/title/title.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [BusinessCreateComponent],
  exports: [BusinessCreateComponent],
  imports: [
    CommonModule,
    BusinessFormModule,
    TitleModule,
    MatButtonModule
  ]
})
export class BusinessCreateModule { }
