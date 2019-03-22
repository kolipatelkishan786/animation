import {Component} from '@angular/core';
import {state, style, trigger} from '@angular/animations';

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
      state('highlight', style({
        'backgroundColor': 'blue',
        transform: 'translate(100px)'
      }))
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
    this.state == 'normal' ? this.state = 'highlight' : this.state = 'normal';
  }

  onShink() {

  }
}
