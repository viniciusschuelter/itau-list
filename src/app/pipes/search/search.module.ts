import {NgModule} from "@angular/core";
import {SearchPipe} from "./search.pipe";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [SearchPipe],
  exports: [SearchPipe],
  imports:[
    CommonModule
  ]
})
export class SearchModule { }
