import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../Models/todo-item'

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

	@Input() itemId : number;

	@Output() edited : EventEmitter<any []> = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }

  save (name : string, date : string) {
  	let data : TodoItem[] = JSON.parse(localStorage.getItem('todoItems'));
  	let itemIndex : number = data.findIndex((i) => i.id == this.itemId);
  	data[itemIndex]._name = name;
  	data[itemIndex]._date = TodoItem.formatDate(date);
  	localStorage.setItem('todoItems', JSON.stringify(data));
  	this.edited.emit(data);
  }

  getItemName () : string {
    let data : TodoItem[] = JSON.parse(localStorage.getItem('todoItems'));
    let itemIndex : number = data.findIndex((i) => i.id == this.itemId);
    return data[itemIndex]._name;
  }

  getItemDate () : string {
    let data : TodoItem[] = JSON.parse(localStorage.getItem('todoItems'));
    let itemIndex : number = data.findIndex((i) => i.id == this.itemId);
    let date = data[itemIndex]._date;
    date = `${date[6]}${date[7]}${date[8]}${date[9]}-${date[3]}${date[4]}-${date[0]}${date[1]}`;
    return date; 
  }

}
