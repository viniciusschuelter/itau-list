import {NgModule} from "@angular/core";
import {SituationComponent} from "./situation.component";
import {CommonModule} from "@angular/common";
import {MatBadgeModule} from "@angular/material/badge";


@NgModule({
  declarations: [SituationComponent],
  exports: [SituationComponent],
  imports: [
    CommonModule,
    MatBadgeModule
  ]
})
export class SituationModule { }
