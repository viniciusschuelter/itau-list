import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import * as cep from 'cep-promise'
import {CepExtraInfo} from "../../models/cep.model";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-cep',
  template: `
    <div class="container-cep">
      <mat-form-field appearance="outline">
        <mat-label>CEP</mat-label>
        <input matInput [autofocus]="true" [(ngModel)]="cep" (ngModelChange)="extraInfoFill()" placeholder="Digite o CEP">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <input matInput [readonly]="true" [ngModel]="extraInfo.street" placeholder="Nome da Rua">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <input matInput [readonly]="true" [ngModel]="extraInfo.neighborhood" placeholder="Bairro">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <input matInput [readonly]="true" [ngModel]="extraInfo.state" placeholder="Estado">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <input matInput [readonly]="true" [ngModel]="extraInfo.city" placeholder="Cidade">
      </mat-form-field>
    </div>
  `,
  styles: [`
      :host {
        .container-cep {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, auto));
          grid-gap: 24px;
        }
      }
  `]
})
export class CepComponent {

  @Input() cep: string = '';
  @Output() cepChange: EventEmitter<FormControl> = new EventEmitter<FormControl>();

  extraInfo: CepExtraInfo = new CepExtraInfo();

  constructor(
    private toastr: ToastrService
  ) {
  }

  extraInfoFill(): void {
    try {
      // @ts-ignore
      cep(this.cep).then( (result: CepExtraInfo) => {
        this.extraInfo = result;
      })
    } catch (e) {
      this.toastr.error('Something is wrong', 'Error');
    }
  }
}
