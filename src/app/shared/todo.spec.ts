/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Todo} from './todo';

describe('Create a Todo', () => {
  it('is uncompleted', () => {
    let todo = new Todo('Buy milk');
    expect(todo).toBeFalsy();
  });
});
