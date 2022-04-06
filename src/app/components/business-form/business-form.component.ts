import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {BusinessInterface} from "../../models/business.model";

@Component({
  selector: 'app-business-form',
  template: `
    <h4>Detalhes do endereço</h4>
    <app-cep [cep]="businessForm.value['cep']"></app-cep>

    <h4>Detalhes da empresa</h4>
    <form [formGroup]="businessForm" class="container-form">
      <mat-form-field appearance="outline">
        <mat-label>Nome</mat-label>
        <input matInput formControlName="name" placeholder="Digite o Nome">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Business</mat-label>
        <input matInput formControlName="business" placeholder="Digite o Business">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Valuation</mat-label>
        <input matInput formControlName="valuation" placeholder="Digite o Valuation">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>CNPJ</mat-label>
        <input matInput formControlName="cnpj" placeholder="Digite o CNPJ">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Ativo?</mat-label>
        <select formControlName="active" matNativeControl required>
          <option value="false">Não</option>
          <option value="true">Sim</option>
        </select>
      </mat-form-field>
    </form>
  `,
  styles: [`
    :host {
      display: block;

      .container-form {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, auto));
        grid-gap: 24px;
      }
    }
  `]
})
export class BusinessFormComponent implements OnChanges {

  @Input() businessDetails: BusinessInterface | undefined;
  @Output() businessDetailsChange: EventEmitter<BusinessInterface> = new EventEmitter<BusinessInterface>();

  businessForm = new FormGroup({});

  constructor() {
    this.businessForm.valueChanges.subscribe( values => {
      console.log(values);
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.businessFormGroupInit();
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
