import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoListContainerComponent } from './todo-list-container.component';
import { Todo } from '../shared/todo';

describe('[Integration] When a todo is archived', () => {
  let fixture: ComponentFixture<TodoListContainerComponent>;
  let containerComponent: TodoListContainerComponent;
  let archiveButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListContainerComponent,
                     TodoListComponent,
                     TodoComponent]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(TodoListContainerComponent);

    containerComponent = fixture.componentInstance;
    containerComponent.actual = [new Todo('Buy milk')];
    containerComponent.archive = [];

    fixture.detectChanges();

    archiveButton = fixture.debugElement.query(e => e.nativeElement.textContent === 'Archive');
  }));

  it('adds a Todo to list "archive"', () => {
    archiveButton.nativeElement.click();

    fixture.detectChanges();

    expect(containerComponent.archive.length).toBe(1);
  });

  it('removes the Todo from list "actual"', () => {
  archiveButton.nativeElement.click();

  fixture.detectChanges();

  expect(containerComponent.actual.length).toBe(0);
  });
});