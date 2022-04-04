import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {BusinessDetailsComponent} from "./business-details.component";
import {BusinessDetailsModule} from "./business-details.module";


const routes: Route[] = [
  {
    path: ':businessId',
    component: BusinessDetailsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BusinessDetailsModule
  ],
})
export class BusinessDetailsRoutingModule { }
