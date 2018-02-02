export class TodoItem {

  private _id : number;
  private _name : string;
  private _date : Date;
  private _isDone : boolean;

  constructor (id : number, name : string, date : Date, isDone : boolean) {
    this._id = id;
    this._name = name;
    this._date = date;
    this._isDone = isDone;
  }

  set id(id : number){
    this._id = id;
  }

  get id() : number {
    return this._id;
  }

  set name(name: string){
    this._name = name;
  }

  get name() : string {
    return this._name;
  }

  set date(date : Date) {
    this._date = date;
  }

  get date() : Date {
    return this._date;
  }

  set isDone(isDone : boolean) {
    this._isDone = isDone;
  }

  get isDone() : boolean {
    return this._isDone;
  }

  // getFormatedDate () : string {
  //   return `${this._date.getDay}/${this._date.getMonth}/${this._date.getFullYear}`
  // }
}