import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo-list',
  template: `
    <h2 [textContent]="title"></h2>
    <app-todo [todo]="todo" *ngFor="let todo of todos"></app-todo>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() title: string;
  @Input() todos: Array<Todo>;
}
