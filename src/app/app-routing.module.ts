import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Imports todos compenet.
import { TodosComponent } from './components/todos/todos.component';
// Imports component.

// We can add our routes into here.
const routes: Routes = [{

  path: '', component: TodosComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
