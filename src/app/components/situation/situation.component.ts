import {Component, Input} from "@angular/core";


@Component({
  selector: 'app-situation',
  host: {class: 'flex'},
  template: `
    <span class="badge" [ngClass]="active ? 'active' : 'inactive'"></span>
  `,
  styles: [`
    :host {
      .badge {
        width: 16px;
        height: 16px;
        border-radius: 50%;

        &.active {
          background: #4CAF50;
        }

        &.inactive {
          background: #F44336;
        }
      }
    }
  `]
})
export class SituationComponent {
  @Input() active: boolean = false;
}
