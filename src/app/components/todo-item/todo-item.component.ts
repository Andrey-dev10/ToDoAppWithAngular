import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// Imports service.
import { TodoService } from '../../services/todo.service';

// Imports model Todo to work with todos data.
import {Todo} from '../../models/Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // Creates input property
  // for when taking something.
  @Input() todo: Todo;
  // Creates output property.
  // When we are emitting something out.
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  // Initializes service
  constructor(private todoService:TodoService) { }

  ngOnInit() {

  }

  // Builds method.
  // This method will change behavior on css.
  setClasses() {

    // Creates variable.
    let classes = {

      // Classes
      todo: true,
      // Ony be in affect if is completed from the todo that
      // is passed in from the input.
      'is-complete': this.todo.completed

    }

    // Return the classses.
    return classes;

  }

  // Builds method.
  // Takes one parameter,
  // the todo list.
  // Method that changes behavior when clicking a to do.
  onToggle(todo) {

    // Toggle in UI
    // Sets completed to whatever is not.
    // If it is true set is to false,
    // if it is false, set it
    // to true.
    // Toggles the is-completed selector in
    // css to cross out completed task.
    todo.completed = !todo.completed;

    // Toggle on server.
    // Update servece once task is
    // completed
    // Returns observable
    this.todoService.toggleCompleted(todo).subscribe(todo =>
    console.log(todo));



  }

  // Builds method.
  // Takes one parameter,
  // the todo list.
  // Method that changes behavior when deleting a to do.
  onDelete(todo) {

    // Calls event,
    // emmits up.
    this.deleteTodo.emit(todo);

  }

}
