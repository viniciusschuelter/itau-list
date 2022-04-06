import {NgModule} from "@angular/core";
import {BusinessComponent} from "./business.component";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {SituationModule} from "../../components/situation/situation.module";
import {TitleModule} from "../../layout/title/title.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {SearchModule} from "../../pipes/search/search.module";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [BusinessComponent],
  exports: [BusinessComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    SituationModule,
    TitleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    SearchModule,
    MatTooltipModule
  ]
})
export class BusinessModule {
}
