import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {BusinessInterface} from "../../models/business.model";


@Component({
  selector: 'app-business-details',
  template: `
      <app-title
        [title]="'Criar novo Polo'"
        [subtitle]="'crie um novo polo e gerencie como quiser'"
      ></app-title>

      <app-business-form [businessDetails]="businessDetails" class="mb-5"></app-business-form>

    <div class="flex">
      <button mat-flat-button color="accent" class="me-5" (click)="goToBack()">Voltar</button>
      <button mat-flat-button color="primary" class="px-6" (click)="saveBusiness()">Salvar</button>
    </div>
  `,
  styles: ['']
})
export class BusinessCreateComponent {

  businessDetails: BusinessInterface | undefined;

  constructor(
    private router: Router
  ) {

  }

  goToBack(): void {
    this.router.navigateByUrl('/business');
  }

  saveBusiness(): void {

  }
}
