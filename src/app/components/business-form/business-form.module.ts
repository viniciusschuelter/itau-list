import {NgModule} from "@angular/core";
import {BusinessFormComponent} from "./business-form.component";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CepModule} from "../cep/cep.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [BusinessFormComponent],
  exports: [BusinessFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    CepModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule
  ]
})
export class BusinessFormModule { }
