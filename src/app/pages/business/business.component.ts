import {Component} from "@angular/core";
import {BusinessService} from "../../services/business.service";
import {filter, Observable} from "rxjs";
import {Router} from "@angular/router";
import {BusinessInterface} from "../../models/business.model";


@Component({
  selector: 'app-business',
  host: {class: 'block h-100 w-100'},
  template: `
    <table class="w-100" mat-table [dataSource]="businessList$ | async">
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Nome</th>
        <td mat-cell *matCellDef="let business"> {{business.name}} </td>
      </ng-container>

      <ng-container matColumnDef="business">
        <th mat-header-cell *matHeaderCellDef> Business</th>
        <td mat-cell *matCellDef="let business"> {{business.business}} </td>
      </ng-container>

      <ng-container matColumnDef="valuation">
        <th mat-header-cell *matHeaderCellDef> Valuation</th>
        <td mat-cell *matCellDef="let business"> {{business.valuation}} </td>
      </ng-container>

      <ng-container matColumnDef="situation">
        <th mat-header-cell *matHeaderCellDef> Situação</th>
        <td mat-cell *matCellDef="let business">
          <app-situation [active]="business.active"></app-situation>
        </td>
      </ng-container>

      <ng-container matColumnDef="action">
        <th mat-header-cell *matHeaderCellDef> Ação</th>
        <td mat-cell *matCellDef="let business">
          <button mat-icon-button (click)="goToBusinessDetails(business)">
            <mat-icon>edit</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="headersColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: headersColumns;"></tr>
    </table>
  `,
  styles: ['']
})
export class BusinessComponent {

  headersColumns: string[] = ['name', 'business', 'valuation', 'situation', 'action'];
  businessList$: Observable<any> = this.businessService.getAllBusiness().pipe(filter(_ => !!_));

  constructor(
    private businessService: BusinessService,
    private router: Router
  ) {
  }

  goToBusinessDetails(business: BusinessInterface): void {
    this.router.navigate(['/business-details/', business.id]);
  }
}
