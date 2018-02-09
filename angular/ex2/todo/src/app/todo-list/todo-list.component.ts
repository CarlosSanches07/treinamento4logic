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

  constructor(
    private router : Router
    ) {}

  ngOnInit() 
  { 
    TodoItem.readData((data) => {
      this.setTodoItems(data);
    })
  }

  setTodoItems (items : any[]) {
    if(items !== null){
      this.todoItems  = items.filter( ( item ) => item.userId === Number(localStorage.getItem('id')));
    } else {
      this.todoItems = items;
    }
  }

  showForm () : void {
    let url = this.router.url;
    if(url.includes('newItem')){
      url = '/todoList'
    }else {
      url = '/todoList/newItem'
    }
    this.router.navigateByUrl(url);
  }

}
