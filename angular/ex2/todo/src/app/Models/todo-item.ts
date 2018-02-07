import { TodoListComponent } from '../todo-list/todo-list.component';

export class TodoItem {

  public id : number;
  public _name : string;
  public _date : string;
  public _isDone : boolean;

  constructor (id : number, name : string, date : string, isDone : boolean) {
    this.id = id;
    this._name = name;
    this._date = date;
    this._isDone = isDone;
  }

  /*______UTILS______*/

  public static formatDate (date : string) : string {
    let tDate : Date = new Date(date);
    tDate.setDate(tDate.getDate() + 1);
    return tDate.toLocaleDateString();

  }

  public static generateId() : number {
    let data : TodoItem[];
    this.readData(res => {
      data = res;
    });
      let lastId : number = (data !== null  && data[0] !== undefined) ? data[data.length - 1].id : 0;
      let id = (localStorage.length < 1) ? 1 : lastId + 1;
      return id;
  }

  public static findItemById(id : number) : TodoItem {
    let item : TodoItem;
    this.readData((data) => {
      item = data[data.findIndex(i => i.id === id)];
    })
    return item;
  }

  /*______CRUD______*/

  public static createData(data : TodoItem[]) {
      localStorage.setItem('todoItems', JSON.stringify(data));
  }

  public static readData (callback : (data : TodoItem[]) => void) {
    const data : TodoItem[] = JSON.parse(localStorage.getItem('todoItems'));
    callback(data);
  }

  public static updateData (id: number, name : string, date : string, isDone ?: boolean ) {
      this.readData((data => {
        const index = data.findIndex((i) => i.id === id);
        if (isDone !== undefined){
          data[index]._isDone = isDone;
          this.createData(data);
          return;
        }
        data[index]._name = name;
        data[index]._date = this.formatDate(date);
        this.createData(data);
      }))  
  }

  public static deleteData (item : TodoItem) {
    this.readData((data) => {
      let index : number = data.findIndex((i) => i.id === item.id);
      let newData = [
        ...data.slice(0, index),
        ...data.slice(index + 1)
      ];
      this.createData(newData);
    })   
  }


}