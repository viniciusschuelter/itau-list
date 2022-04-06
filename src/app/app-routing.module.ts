import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {ToastrModule} from "ngx-toastr";

const routes: Route[] = [
  {
    path: 'business',
    loadChildren: () => import('./pages/business/business-routing.module').then(m => m.BusinessRoutingModule)
  },
  {
    path: 'business-details',
    loadChildren: () => import('./pages/business-details/business-details-routing.module').then(m => m.BusinessDetailsRoutingModule)
  },
  {
    path: 'business-create',
    loadChildren: () => import('./pages/business-create/business-create-routing.module').then(m => m.BusinessCreateRoutingModule)
  },
  { path: '', redirectTo: '/business', pathMatch: 'full' },
  { path: '**', redirectTo: '/business' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
