import {NgModule} from "@angular/core";
import {CepComponent} from "./cep.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [CepComponent],
  exports: [CepComponent],
  imports: [
    CommonModule
  ]
})
export class CepModule { }
