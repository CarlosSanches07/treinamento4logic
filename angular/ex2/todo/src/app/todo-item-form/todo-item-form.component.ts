import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {TodoItem} from '../Models/todo-item'
import {TodoListComponent} from '../todo-list/todo-list.component'

@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.css']
})
export class TodoItemFormComponent implements OnInit{

  todoItem : TodoItem;
  @Output() sendData : EventEmitter<any[]> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  test(x : any[]) {
      this.sendData.emit(x);
  }

  save(name : string, date : string){
    if (name == '' || !date)      
      return;
    let data = JSON.parse(localStorage.getItem('todoItems'));
    let lastId = (data.length > 0) ? data[data.length - 1]._id : 0;
    let id = (localStorage.length < 1) ? 1 : lastId + 1;
    this.todoItem = new TodoItem(id, name, new Date(date), false);
    let todoItems : TodoItem[] = new Array();
    
    if(!localStorage.length){
      todoItems.push(this.todoItem);
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
    } else {
      todoItems = JSON.parse(localStorage.getItem('todoItems'));
      todoItems.push(this.todoItem);
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }
    this.test(todoItems);
  }



}
