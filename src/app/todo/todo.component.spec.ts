import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TodoComponent } from './todo.component';
import { Todo } from '../shared/todo';

describe('[Isolated] When a todo is completed', () => {

  let todoComponent: TodoComponent;

  beforeEach(() => {
    todoComponent = new TodoComponent();
    todoComponent.todo = new Todo('Buy milk');
  });

  it('completes the todo', () => {
    todoComponent.toggleCompleted({target: { checked: true }});
    expect(todoComponent.todo.isCompleted).toBeTruthy();
  });
});

describe('[Shallow] When a todo is archived', () => {
  let fixture: ComponentFixture<TodoComponent>;
  let todoComponent: TodoComponent;
  let archiveButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    todoComponent = fixture.componentInstance;
    todoComponent.todo = new Todo('Buy milk');

    fixture.detectChanges();

    archiveButton = fixture.debugElement.query(e => e.nativeElement.textContent === 'Archive');
  }));

  it('archives the given todo', () => {
    archiveButton.nativeElement.click();

    fixture.detectChanges();

    expect(todoComponent.todo.isArchived).toBeTruthy();
  });

  it('raises event "archived"', () => {
    spyOn(todoComponent.archived, 'emit');

    archiveButton.nativeElement.click();

    expect(todoComponent.archived.emit).toHaveBeenCalled();
  });
});
