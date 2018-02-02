import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoItem } from 'app/Models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem;
  @Input() id : number;

  @Output() bye : EventEmitter<any[]> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  delete () : void{
    let data : TodoItem[];
    data = JSON.parse(localStorage.getItem('todoItems'));
    let itemIndex : number = data.findIndex((item) => item._id  === this.id);
    let newData = [
      ...data.slice(0,itemIndex),
      ...data.slice(itemIndex + 1)
    ];
    localStorage.setItem('todoItems', JSON.stringify(newData));
    this.bye.emit(newData);
  }
}

