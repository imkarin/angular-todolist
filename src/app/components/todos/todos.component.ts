import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  deleteTodo(todo: Todo) {
    // Delete todo from the UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Make delete request on server
    this.todoService.deleteTodo(todo).subscribe(t => console.log('deleted'))
  }

  addTodo(todo: Todo) {
    // Post the new todo on the server
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }
}
