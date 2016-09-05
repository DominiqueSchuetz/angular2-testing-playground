import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo-list',
  template: `
    <h2 [textContent]="title"></h2>
    <app-todo [todo]="todo" (archived)="archiveTodo($event)" *ngFor="let todo of todos"></app-todo>
  `
})
export class TodoListComponent {
  @Input() title: string;
  @Input() todos: Array<Todo>;
  @Output() archived: EventEmitter<Todo> = new EventEmitter();

  archiveTodo(todo: Todo) {
    this.archived.emit(todo);
  }
}
