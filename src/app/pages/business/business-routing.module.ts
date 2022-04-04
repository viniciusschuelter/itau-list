import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {BusinessComponent} from "./business.component";
import {BusinessModule} from "./business.module";

const routes: Route[] = [
  {
    path: '',
    component: BusinessComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BusinessModule
  ]
})
export class BusinessRoutingModule {
}
