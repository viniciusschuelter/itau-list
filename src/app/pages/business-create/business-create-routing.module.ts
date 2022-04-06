import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {BusinessCreateComponent} from "./business-create.component";
import {BusinessCreateModule} from "./business-create.module";


const routes: Route[] = [
  {
    path: '',
    component: BusinessCreateComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BusinessCreateModule
  ],
})
export class BusinessCreateRoutingModule { }
