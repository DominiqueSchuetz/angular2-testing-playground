import { Component } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo-list-container',
  template: `
    <app-todo-list [title]="'Actual'" [todos]="actual" (archived)="moveTodoToArchive($event)"></app-todo-list>
    <app-todo-list [title]="'Archive'" [todos]="archive"></app-todo-list>
  `,
})
export class TodoListContainerComponent {
  actual: Array<Todo>;
  archive: Array<Todo>;

  constructor() {
    this.actual = [new Todo('Buy milk'), new Todo('Upgrade Angular')];
    this.archive = [new Todo('Fuel car', true, true)];
  }

  moveTodoToArchive(todo: Todo) {
    this.actual = this.actual.filter(t => t.isArchived === false);
    this.archive.unshift(todo);
  }
}
