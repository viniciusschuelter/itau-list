import {Component} from "@angular/core";
import {BusinessInterface} from "../../models/business.model";
import {filter, Observable, switchMap} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BusinessHttpService} from "../../services/business-http.service";


@Component({
  selector: 'app-business-details',
  template: `
    <ng-container *ngIf="business$ | async as business">
      <app-title
        [title]="'Polo ' + business.name"
        [subtitle]="'exibindo detalhes do polo ' + business.name + '#' + business.id"
      ></app-title>

      <app-business-form class="mb-5" [businessDetails]="business"></app-business-form>

      <div class="flex">
        <button mat-flat-button color="accent" class="me-5" (click)="goToBack()">Voltar</button>
        <button mat-flat-button color="primary" class="px-6" (click)="saveBusiness()">Salvar</button>
      </div>
    </ng-container>
  `,
  styles: ['']
})
export class BusinessDetailsComponent {

  business$: Observable<BusinessInterface | undefined> = this.activatedRoute.params
    .pipe(
      switchMap((params: Params) => {
        return this.businessHttpService.getBusinessById(params['businessId'])
          .pipe(
            filter(buss => !!buss)
          )
      })
    )

  constructor(
    private activatedRoute: ActivatedRoute,
    private businessHttpService: BusinessHttpService,
    private router: Router
  ) {

  }

  goToBack(): void {
    this.router.navigateByUrl('/business');
  }

  saveBusiness(): void {

  }
}
