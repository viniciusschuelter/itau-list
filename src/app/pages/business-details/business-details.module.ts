import {NgModule} from "@angular/core";
import {BusinessDetailsComponent} from "./business-details.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [BusinessDetailsComponent],
  exports: [BusinessDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class BusinessDetailsModule { }
