import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {BusinessInterface} from "../../models/business.model";

@Component({
  selector: 'app-business-form',
  template: `
    <div>
      <h4>Detalhes do endereço</h4>
      <app-cep [cep]="businessForm.value['cep']"></app-cep>

      <form [formGroup]="businessForm">
        <h4>Detalhes da empresa</h4>
        <mat-form-field appearance="fill">
          <mat-label>Nome</mat-label>
          <input matInput formControlName="name" placeholder="Digite o Nome">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Business</mat-label>
          <input matInput formControlName="business" placeholder="Digite o Business">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Valuation</mat-label>
          <input matInput formControlName="valuation" placeholder="Digite o Valuation">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>CNPJ</mat-label>
          <input matInput formControlName="cnpj" placeholder="Digite o CNPJ">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Ativo?</mat-label>
          <input matInput formControlName="active" placeholder="Digite o Ativo">
        </mat-form-field>
      </form>
    </div>
  `,
  styles: ['']
})
export class BusinessFormComponent implements OnChanges {

  @Input() businessDetails: BusinessInterface | undefined;

  businessForm = new FormGroup({});

  ngOnChanges(changes: SimpleChanges) {
    if (this.businessDetails) {
      this.businessFormGroupInit();
    }
  }

  businessFormGroupInit(): void {
    this.businessForm = new FormGroup({
      id: new FormControl(this.businessDetails?.id),
      name: new FormControl(this.businessDetails?.name),
      business: new FormControl(this.businessDetails?.business),
      valuation: new FormControl(this.businessDetails?.valuation),
      active: new FormControl(this.businessDetails?.active),
      cep: new FormControl(this.businessDetails?.cep),
      cnpj: new FormControl(this.businessDetails?.cnpj),
    });
  }
}
