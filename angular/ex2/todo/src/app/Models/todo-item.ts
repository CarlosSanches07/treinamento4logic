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

  // set id(id : number){
  //   this._id = id;
  // }

  // get id() : number {
  //   return this._id;
  // }

  set name(name: string){
    this._name = name;
  }

  get name() : string {
    return this._name;
  }

  set date(date : string) {
    this._date = date;
  }

  get date() : string {
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
  public static formatDate (date : string) : string {
    let tDate : Date = new Date(date);
    tDate.setDate(tDate.getDate() + 1);
    return tDate.toLocaleDateString();

  }

}