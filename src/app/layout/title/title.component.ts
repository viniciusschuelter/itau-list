import {Component, Input} from "@angular/core";


@Component({
  selector: 'app-title',
  host: {class: 'block h-100 w-100'},
  template: `
    <div class="flex between">
      <div class="flex col">
        <h1>{{title}}</h1>
        <h3>{{subtitle}}</h3>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      margin: 24px 0;

      h1 {
        font-size: 1.725rem;
        font-weight: 700;
        margin-bottom: 4px;
        letter-spacing: 2px;
      }

      h3 {
        font-size: 1.25rem;
        letter-spacing: 1.5px;
        font-weight: 300;
      }
    }
  `]
})
export class TitleComponent {
    @Input() title = 'Polos Itaú';
    @Input() subtitle = 'confira abaixo alguns dos principais polos';
}
