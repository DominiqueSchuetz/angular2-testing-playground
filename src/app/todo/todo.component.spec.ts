import { TodoComponent } from './todo.component';
import { Todo } from '../shared/todo';

describe('When a todo is completed', () => {
  it('completes the todo', () => {
    let todoComponnet = new TodoComponent();

    todoComponnet.todo = new Todo('Buy milk');
    todoComponnet.toggleCompleted({target: { checked: true }});

    expect(todoComponnet.todo.isCompleted).toBeTruthy();
  });
});
