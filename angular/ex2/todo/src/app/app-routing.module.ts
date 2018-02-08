import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemFormComponent } from './todo-item-form/todo-item-form.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuardService } from './auth-guard.service';

const routes : Routes = [
  { path : 'todoList',
    component: TodoListComponent,
    canActivate : [AuthGuardService],
    children : [
      { path : 'newItem', component: TodoItemFormComponent },  
      { path : 'editItem/:id', component: EditTodoComponent }
    ]
  },
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  { path : '', redirectTo : 'todoList', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }