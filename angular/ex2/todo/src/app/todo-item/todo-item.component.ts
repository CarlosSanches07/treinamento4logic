import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

import { TodoItem } from '../Models/todo-item';
import { TodoListComponent } from '../todo-list/todo-list.component'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem;

  constructor(
    private todoList : TodoListComponent,
    private router : Router
    ) { }

  ngOnInit() {
  }

  delete () : void{
    if(!confirm('Do you really wanna delete this ?'))
      return
    TodoItem.deleteData(TodoItem.findItemById(this.todoItem.id));
    TodoItem.readData((data) => {
      this.todoList.setTodoItems(data);
    })
    this.router.navigateByUrl('/todoList');
  }

  edit () : void {
    console.log(TodoItem.formatDate(this.todoItem._date));
    let url : string;
    if(this.router.url.includes('edit'))
      url = '/todoList'
    else 
      url = `/todoList/editItem/${this.todoItem.id}`;
    this.router.navigateByUrl(url);
  }

  done () : void {
    this.todoItem._isDone = !this.todoItem._isDone;
    TodoItem.updateData(this.todoItem.id, this.todoItem._name, this.todoItem._date, this.todoItem._isDone);
    TodoItem.readData((data) => {
      this.todoList.setTodoItems(data);
    })
  }

}

