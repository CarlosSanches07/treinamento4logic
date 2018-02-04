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

  isShowEdit  : boolean;

  editingId : number;

  constructor() { 
  }

  ngOnInit() {
    this.isShowing = false;
    this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
  }

  setTodoItems (items : any[]) {
    this.todoItems = items;
    this.isShowing = false;
    this.isShowEdit = false;
  }

  showForm () : void {
    this.isShowEdit = false;
    this.isShowing = !this.isShowing;
  }

  showEdit (id : number) : void {
    this.isShowing = false;
    this.editingId = id;
    this.isShowEdit = !this.isShowEdit;
  }

}
