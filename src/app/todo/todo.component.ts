import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo',
  template: `
    <div>
      <input type="checkbox" [(ngModel)]="todo.isCompleted">
      <span [textContent]="todo.title"></span>
    </div>
  `,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() archived: EventEmitter<Todo> = new EventEmitter();
}
