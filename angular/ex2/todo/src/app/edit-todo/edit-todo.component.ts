import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TodoItem } from '../Models/todo-item';
import { TodoListComponent } from '../todo-list/todo-list.component'

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  itemId : number;

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private todoList : TodoListComponent
    )
  { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params : Params) => {
      this.itemId = Number(params['id']);
    })
  }

  save (name : string, date : string) {
    TodoItem.updateData(this.itemId, name, date);
    TodoItem.readData((data) => {
      this.todoList.setTodoItems(data);
    })
    this.router.navigateByUrl('/todoList');
  }

  getItemName () : string {
    return TodoItem.findItemById(this.itemId)._name;
  }

  getItemDate () : string {
    let date = TodoItem.findItemById(this.itemId)._date;
    date = `${date[6]}${date[7]}${date[8]}${date[9]}-${date[3]}${date[4]}-${date[0]}${date[1]}`;
    return date;
  }

}
