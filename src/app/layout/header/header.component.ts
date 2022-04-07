import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-header',
  host: {class: 'block h-100 w-100 border-bottom'},
  template: `
    <mat-toolbar [style.height.px]="120" color="warn">
      <div class="header-container">
        <div class="flex w-100">
          <img [style.height.px]="120" src="../../../assets/images/logo.svg" alt="log">
        </div>

        <div class="flex center">
          <mat-form-field appearance="legacy" class="me-5">
            <mat-select [(ngModel)]="currLanguage" (ngModelChange)="setCurrLanguage()" required>
              <mat-option *ngFor="let lang of listLanguages" [value]="lang">{{lang}}</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-card>
            <mat-card-header>
              <div mat-card-avatar class="user-image"></div>
              <mat-card-title>John Doe</mat-card-title>
              <mat-card-subtitle>Diretor Itaú BBA</mat-card-subtitle>
            </mat-card-header>
          </mat-card>
        </div>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  listLanguages = ['PT', 'EN'];
  currLanguage = 'PT';

  constructor(
    private translate: TranslateService
  ) {
    this.setCurrLanguage();
  }

  setCurrLanguage(): void {
    this.translate.setDefaultLang(this.currLanguage);
    this.translate.use(this.currLanguage);
    this.translate.setTranslation(this.currLanguage, {
      currency: this.currLanguage === 'PT' ? 'R$' : 'U$'
    });
  }
}
