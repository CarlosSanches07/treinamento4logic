import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../Models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems : TodoItem[];

  constructor() { 

  }

  ngOnInit() {
    this.todoItems = [new TodoItem('sadasd', new Date(), false), new TodoItem('bola', new Date(), true)];
  }

}
