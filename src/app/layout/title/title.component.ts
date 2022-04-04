import {Component} from "@angular/core";


@Component({
  selector: 'app-title',
  host: {class: 'block h-100 w-100'},
  template: `
    <div class="flex between">
      <div class="flex col">
        <mat-card-title>title</mat-card-title>
        <mat-card-subtitle>subtitle</mat-card-subtitle>
      </div>
    </div>
  `,
  styles: [`
    :host {
      margin: 24px 0;
    }
  `]
})
export class TitleComponent {

}
