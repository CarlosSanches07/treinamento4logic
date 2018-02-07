export class User {
  public id : number;
  public userName : string;
  public password : string;

  constructor ( userName : string, password : string ) {
    this.userName = userName;
    this.password = password;
  }

  public static generateId() : number {
    let users : User[];
    this.readUser(res => {
      users = res;
    });
    let lastId : number = (users !== null  && users[0] !== undefined) ? users[users.length - 1].id : 0;
    let id = (localStorage.length < 1) ? 1 : lastId + 1;
    return id;
  }

  public static verifyUser( user : User ) {
    let isRegitered : boolean;
    this.readUser( ( data ) => {
      isRegitered = ( data.findIndex( ( i ) => i.userName === user.userName ) == -1 ) ? false : true;
    })
    return isRegitered;
  }

  public static verifyPassword (user : User) {
    let isRegitered : boolean;
    this.readUser( ( data ) => {
      isRegitered = ( data.findIndex( ( i ) => i.password === user.password ) == -1 ) ? false : true;
    })
    return isRegitered; 
  }

  public static createUsers( users : User[] ) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  public static readUser( callback : ( data : any[] ) => void ) {
    const users : User[] = JSON.parse( localStorage.getItem( 'users' ) );
    callback( users );
  }

}