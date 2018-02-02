import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../Models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems : TodoItem[];

  isShowing : boolean;

  constructor() { 
  }

  ngOnInit() {
    this.isShowing = false;
    this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
  }

  setTodoItems (items : any[]) {
    this.todoItems = items;
    this.isShowing = false;
  }

  showForm () : void {
    this.isShowing = !this.isShowing
  }

}
