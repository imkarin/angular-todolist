import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter()

  title!: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }
    // Send the new Todo to the Todos component
    this.addTodo.emit(todo)
  }
}
