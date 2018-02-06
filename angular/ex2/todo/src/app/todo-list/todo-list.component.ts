import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router : Router
    ) {}

  ngOnInit() 
  { 
    this.isShowing = false;
    this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
  }

  setTodoItems (items : any[]) {
    this.todoItems = items;
    this.isShowing = false;
    this.isShowEdit = false;
  }

  showForm () : void {
    let url = this.router.url;
    console.log(url);
    if(url.includes('newItem')){
      url = '/todoList'
    }else {
      url = '/todoList/newItem'
    }
    this.router.navigateByUrl(url);
  }

  showEdit (id : number) : void {
    this.isShowing = false;
    this.editingId = id;
    this.isShowEdit = !this.isShowEdit;
  }

}
