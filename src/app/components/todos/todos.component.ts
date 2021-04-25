import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
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
