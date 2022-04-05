import {Component} from "@angular/core";
import {BusinessInterface} from "../../models/business.model";
import {filter, Observable, switchMap} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {BusinessService} from "../../services/business.service";


@Component({
  selector: 'app-business-details',
  template: `
    <ng-container *ngIf="business$ | async as business">
      <app-business-form [businessDetails]="business"></app-business-form>
    </ng-container>
  `,
  styles: ['']
})
export class BusinessDetailsComponent {

  business$: Observable<BusinessInterface | undefined> = this.activatedRoute.params
    .pipe(
      switchMap((params: Params) => {
        return this.businessService.getBusinessById(params['businessId'])
          .pipe(
            filter(buss => !!buss)
          )
      })
    )

  constructor(
    private activatedRoute: ActivatedRoute,
    private businessService: BusinessService,
  ) {

  }
}
