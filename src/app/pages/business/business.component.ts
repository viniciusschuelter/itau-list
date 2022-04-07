import {Component} from "@angular/core";
import {BusinessHttpService} from "../../services/business-http.service";
import {filter, Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {BusinessInterface} from "../../models/business.model";
import {BusinessService} from "../../services/business.service";


@Component({
  selector: 'app-business',
  host: {class: 'block h-100 w-100'},
  template: `
    <app-title>
      <div class="flex center">
        <button mat-icon-button matTooltip="Criar Polo" matTooltipPosition="above" class="me-5"(click)="goToBusinessCreate()">
          <mat-icon>add</mat-icon>
        </button>
        <mat-form-field appearance="outline">
          <input [(ngModel)]="businessSearch" matInput placeholder="Pesquisar...">
        </mat-form-field>
      </div>
    </app-title>

    <div class="business-table">
      <table class="w-100" mat-table
             [dataSource]="((businessList$ | async) | search: 'name' : businessSearch) | splice: currPage: pageSize">
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef> Nome</th>
          <td mat-cell *matCellDef="let business"><b>{{business.name}}</b></td>
        </ng-container>

        <ng-container matColumnDef="business">
          <th mat-header-cell *matHeaderCellDef> Business</th>
          <td mat-cell *matCellDef="let business"> {{business.business}} </td>
        </ng-container>

        <ng-container matColumnDef="valuation">
          <th mat-header-cell *matHeaderCellDef> Valuation</th>
          <td mat-cell *matCellDef="let business"> {{business.valuation}} {{ 'currency' | translate }} </td>
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
            <button mat-icon-button matTooltip="Editar Polo" matTooltipPosition="above" (click)="goToBusinessDetails(business)">
              <mat-icon>edit</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="headersColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: headersColumns;"></tr>
      </table>
      <ng-container *ngIf="businessList$ | async as businessList">
        <mat-paginator [length]="businessList?.length"
                       [pageSize]="pageSize"
                       (page)="currPage = $event.pageIndex"
                       aria-label="Select page">
        </mat-paginator>
      </ng-container>
    </div>
  `,
  styles: [`
    :host {
      .business-table {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  `]
})
export class BusinessComponent {

  headersColumns: string[] = ['name', 'business', 'valuation', 'situation', 'action'];
  businessList$: Observable<any> = this.businessService.business$.pipe(filter(_ => !!_));
  subscriber: Subscription = new Subscription();
  businessSearch = '';
  currPage = 0;
  pageSize = 5;

  constructor(
    private businessHttpService: BusinessHttpService,
    private businessService: BusinessService,
    private router: Router
  ) {
    if (!this.businessService.getBusiness()?.length) {
      this.businessServiceInit();
    }
  }

  businessServiceInit(): void {
    this.subscriber.add(
      this.businessHttpService.getAllBusiness().subscribe((business: BusinessInterface[]) => {
        this.businessService.setBusiness(business);
      })
    );
  }

  goToBusinessDetails(business: BusinessInterface): void {
    this.router.navigate(['/business-details/', business.id]);
  }

  goToBusinessCreate(): void {
    this.router.navigateByUrl('/business-create');
  }
}
