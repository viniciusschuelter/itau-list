import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'business',
    loadChildren: () => import('./pages/business/business-routing.module').then(m => m.BusinessRoutingModule)
  },
  {
    path: 'business-details',
    loadChildren: () => import('./pages/business-details/business-details-routing.module').then(m => m.BusinessDetailsRoutingModule)
  },
  { path: '', redirectTo: '/business', pathMatch: 'full' },
  { path: '**', redirectTo: '/business' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
