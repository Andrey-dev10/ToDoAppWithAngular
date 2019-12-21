// Allows to inject into a constructor componet.
import { Injectable } from '@angular/core';
// Imports Observable.
import { Observable } from 'rxjs';
// Imports http module and http headers.
   // This allows you to make all the request such as
   // get, post, del, patch get the response and handler.
   // Httpheaders is for when we send data
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Imports Todo model in ordet to have access to the data.
import { Todo } from '../models/Todo';


const httpOptions = {

  // Takes an object with the headers
  // we want to send.
  headers: new HttpHeaders({

    'Content-Type': 'application/json'

  })

}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Adds json placeholder as a service to this class.
  // Stores in in the variable todosUrl
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  // Builds property.
  // Stores limit of the todos.
  // By puttins ?_limit we can limit the todos
  todosLimit = '?_limit=5';

  // Intitializes Module.
  constructor(private http:HttpClient) {

  }

  // Builds method.
  // Our data will live here.
  // Returns Observable
  // Get todos.
  getTodos():Observable<Todo[]> {

    // Using json placeholders to get our data from an api.

    // Endpoints.
    // Makes get request to the json placeholder.
    // Method takes one parameter,
    // the todosUrl
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);

  }

  // Delete Todo.
  deleteTodo(todo:Todo):Observable<Todo> {

    // Makes delete request by using its id.
    const url = `${this.todosUrl}/${todo.id}`;

    // Returns the deleted item.
    return this.http.delete<Todo>(url, httpOptions);


  }

  // Add Todo
  addTodo(todo:Todo):Observable<Todo> {

    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);


  }


  // Toggle Completed.
  // Endpoints for using put when updating something on the server.
  // Returns Observable
  toggleCompleted(todo: Todo):Observable<any> {

    // Since we are updating,
    // it need the id to the specific todo.
    const url = `${this.todosUrl}/${todo.id}`;

    // Put request.
    return this.http.put(url, todo, httpOptions);

  }

}
