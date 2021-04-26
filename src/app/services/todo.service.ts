import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'Do groceries',
        completed: false
      },
      {
        id: 2,
        title: 'Watch movie',
        completed: false
      },
      {
        id: 3,
        title: 'Work on project',
        completed: false
      }
    ]
  }
}
