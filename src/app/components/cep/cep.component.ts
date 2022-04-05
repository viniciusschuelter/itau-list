import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import * as cep from 'cep-promise'
import {CepExtraInfo} from "../../models/cep.model";


@Component({
  selector: 'app-cep',
  template: `
    <div>
      <mat-form-field appearance="fill">
        <mat-label>CEP</mat-label>
        <input matInput [autofocus]="true" [(ngModel)]="cep" (ngModelChange)="extraInfoFill()" placeholder="Digite o CEP">
      </mat-form-field>

      <mat-form-field appearance="fill">
        <input matInput [readonly]="true" [ngModel]="extraInfo.street" placeholder="Nome da Rua">
      </mat-form-field>

      <mat-form-field appearance="fill">
        <input matInput [readonly]="true" [ngModel]="extraInfo.neighborhood" placeholder="Bairro">
      </mat-form-field>

      <mat-form-field appearance="fill">
        <input matInput [readonly]="true" [ngModel]="extraInfo.state" placeholder="Estado">
      </mat-form-field>

      <mat-form-field appearance="fill">
        <input matInput [readonly]="true" [ngModel]="extraInfo.city" placeholder="Cidade">
      </mat-form-field>
    </div>
  `,
  styles: ['']
})
export class CepComponent {

  @Input() cep: string = '';
  @Output() cepChange: EventEmitter<FormControl> = new EventEmitter<FormControl>();

  extraInfo: CepExtraInfo = new CepExtraInfo();

  extraInfoFill(): void {
    console.log(this.cep);
    try {
      // @ts-ignore
      cep(this.cep).then( (result: CepExtraInfo) => {
        this.extraInfo = result;
      })
    } catch (e) {
      console.log(e);
    }
  }
}
