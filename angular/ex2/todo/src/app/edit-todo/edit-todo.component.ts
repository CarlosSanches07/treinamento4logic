import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../Models/todo-item'

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

	// itemName: string;
	// itemDate: Date;

	@Input() itemId : number;

	@Output() edited : EventEmitter<any []> = new EventEmitter();

  constructor() { 
		// this.itemName = data[itemIndex]._name;
		// this.itemDate = new Date(data[itemIndex]._date);
  }

  ngOnInit() {
		// let data: TodoItem[] = JSON.parse(localStorage.getItem('todoItems'));
		// let itemIndex: number = data.findIndex((i) => i.id == this.itemId);
		// console.log(this.itemId);
		// console.log(data);
		// console.log(itemIndex);
  }

  save (name : string, date : string) {
  	let data : TodoItem[] = JSON.parse(localStorage.getItem('todoItems'));
  	let itemIndex : number = data.findIndex((i) => i.id == this.itemId);
  	data[itemIndex]._name = name;
  	data[itemIndex]._date = new Date(date);
  	localStorage.setItem('todoItems', JSON.stringify(data));
  	console.log(data[itemIndex]);
  	this.edited.emit(data);
  }

}
