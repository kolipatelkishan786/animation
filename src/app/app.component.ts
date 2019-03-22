import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'backgroundColor': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'backgroundColor': 'blue',
        transform: 'translate(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800))

    ])
  ]
})
export class AppComponent {
  state = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimation() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  onShink() {

  }
}
