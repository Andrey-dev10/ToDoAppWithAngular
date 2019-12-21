import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  // Declares output for adding.
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  // Declares properties.
  title:string;

  constructor() { }

  ngOnInit() {
  }

  // Builds method
  // for when submiting.
  onSubmit() {

    const todo = {

      // Gets the title from the input.
      title: this.title,
      completed: false

    }

    this.addTodo.emit(todo);

  }

}
