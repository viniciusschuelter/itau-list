import {NgModule} from "@angular/core";
import {TitleComponent} from "./title.component";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [TitleComponent],
  exports: [TitleComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class TitleModule { }
