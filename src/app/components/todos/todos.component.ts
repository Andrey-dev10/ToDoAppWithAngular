import { Component, OnInit } from '@angular/core';
// Imports service to bring our todos data.
import {TodoService} from '../../services/todo.service';
// Imports Todo model to work with todo data.
import {Todo} from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

// Builds class.
// Inherits from Onnit.
export class TodosComponent implements OnInit {

  // Loops from all of our todos that
  // come from json place holders and fetch them
  // through a service.

  // Builds property.
  todos:Todo[];

  // Constructor is used initialize services.
  // The name can be anything we want
  // and then bind it to the services we import.
  constructor(private todoService:TodoService) { }

  // Life cycle method.
  // Runs right away.
  ngOnInit() {

    // Method call
    // using service.
    // Subscribe to the oservable
    this.todoService.getTodos().subscribe(todos => {

      // Sets todos
      // to the todos that are return.
      this.todos = todos;


    });

  }

  // Builds method.
  // Takes one parameter,
  // a todo.
  // When we click the delete button sends
  // an event to the todo-item component.
  deleteTodo(todo:Todo) {

    // Remove From UI.
    // Deletes todos from the front end.
    // Returns all the todos that dont have that id.
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // Deleted todos from the server.
    this.todoService.deleteTodo(todo).subscribe();


  }

  // Builds method.
  addTodo(todo:Todo) {

    // Makes post request to the server through the service.
    this.todoService.addTodo(todo).subscribe(todo => {

      // Pushes to the array.
      this.todos.push(todo);



    });



  }



}
