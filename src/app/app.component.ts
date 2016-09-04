import { Component } from '@angular/core';
import { Todo } from './shared/todo';

@Component({
  selector: 'app-root',
  template: `
    <app-todo-list [title]="'Actual'" [todos]="actual"></app-todo-list>
    <app-todo-list [title]="'Archive'" [todos]="archive"></app-todo-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actual: Array<Todo>;
  archive: Array<Todo>;

  constructor() {
    this.actual = [new Todo('Buy milk'), new Todo('Upgrade Angular')];
    this.archive = [new Todo('Fuel car')];
  }
}
