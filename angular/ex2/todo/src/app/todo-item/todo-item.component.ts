import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../Models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem;
  @Input() id : number;

  @Output() bye : EventEmitter<any[]> = new EventEmitter();
  @Output() sendId : EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  delete () : void{
    let data : TodoItem[];
    data = JSON.parse(localStorage.getItem('todoItems'));
    let itemIndex : number = data.findIndex((item : TodoItem) => item.id  === this.id);
    let newData = [
      ...data.slice(0,itemIndex),
      ...data.slice(itemIndex + 1)
    ];
    localStorage.setItem('todoItems', JSON.stringify(newData));
    this.bye.emit(newData);
  }

  edit () : void {
    this.sendId.emit(this.id);
  }

  done () : void {
    let data : TodoItem[];
    data = JSON.parse(localStorage.getItem('todoItems'));
    let itemIndex : number = data.findIndex((item : TodoItem) => item.id == this.id);
    data[itemIndex]._isDone = !data[itemIndex]._isDone;
    localStorage.setItem('todoItems', JSON.stringify(data));
    this.bye.emit(data);
  }

}

