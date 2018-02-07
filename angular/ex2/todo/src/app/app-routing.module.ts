import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemFormComponent } from './todo-item-form/todo-item-form.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const routes : Routes = [
  { path : 'todoList',
    component: TodoListComponent,
    children : [
      { path : 'newItem', component: TodoItemFormComponent },  
      { path : 'editItem/:id', component: EditTodoComponent }
    ]
  },
  { path : '', redirectTo : 'todoList', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }