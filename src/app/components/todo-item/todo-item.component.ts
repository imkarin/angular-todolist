import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void { }

  // Set classes dynamically
  setClasses() {
    const classes = {
      todo: true,
      'is-completed': this.todo.completed
    }

    return classes
  }

  // Event listener on checkbox toggle
  onToggle(todo: Todo) {
    // Toggle in UI (before server, so it's quicker for the user)
    this.todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe()
  }

}
