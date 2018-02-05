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
	  // let name = document.getElementById('edit-name');
   //  let date = document.getElementById('edit-date');
   //  let data : TodoItem[] = JSON.parse(localStorage.getItem('todoItems'));
   //  let itemIndex : number = data.findIndex((item : TodoItem) => item.id == this.itemId);
   //  name.value = data[itemIndex]._name;
   //  date.value = data[itemIndex]._date;
  }

  ngOnInit() {
  }

  save (name : string, date : string) {
  	let data : TodoItem[] = JSON.parse(localStorage.getItem('todoItems'));
  	let itemIndex : number = data.findIndex((i) => i.id == this.itemId);
  	data[itemIndex]._name = name;
  	data[itemIndex]._date = TodoItem.formatDate(date);
  	localStorage.setItem('todoItems', JSON.stringify(data));
  	console.log(data[itemIndex]);
  	this.edited.emit(data);
  }

}
