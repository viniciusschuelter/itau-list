import {NgModule} from "@angular/core";
import {BusinessComponent} from "./business.component";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {SituationModule} from "../../components/situation/situation.module";


@NgModule({
  declarations: [BusinessComponent],
  exports: [BusinessComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    SituationModule
  ]
})
export class BusinessModule {
}
