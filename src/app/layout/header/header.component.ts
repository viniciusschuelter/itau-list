import {Component} from "@angular/core";


@Component({
  selector: 'app-header',
  host: {class: 'block h-100 w-100'},
  template: `
    <mat-toolbar [style.height.px]="120" color="">
      <button mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
      <div class="flex w-100">
        <img [style.height.px]="120" src="../../../assets/images/logo.svg" alt="log">
      </div>
      <div class="flex center">
        <button mat-icon-button>
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button>
          <mat-icon>share</mat-icon>
        </button>
      </div>
    </mat-toolbar>
  `,
  styles: ['']
})
export class HeaderComponent {

}
