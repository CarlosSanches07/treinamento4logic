import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import {TodoItem} from '../Models/todo-item'
import {TodoListComponent} from '../todo-list/todo-list.component'

@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.css']
})
export class TodoItemFormComponent implements OnInit{

  todoItem : TodoItem;

  constructor(
    private todoListComponent : TodoListComponent,
    private router : Router
    ) {}

  ngOnInit() {
  }

  save(name : string, date : string){
    if(!name || !date)
      return;

    this.todoItem = new TodoItem(TodoItem.generateId(), name, TodoItem.formatDate(date), false);
    this.todoListComponent.todoItems.push(this.todoItem);
    TodoItem.createData(this.todoListComponent.todoItems);
    this.router.navigateByUrl('/todoList');
  }

}
