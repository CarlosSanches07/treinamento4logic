export class User {
  public id : number;
  public userName : string;
  public password : string;

  constructor ( userName : string, password : string ) {
    this.userName = userName.toLowerCase();
    this.password = password;
  }

  public static generateId() : number {
    let users : User[];
    this.readUser(res => {
      users = res;
    });
    if(users === null)
      return  1;
    let lastId : number = (users !== null  && users[0] !== undefined) ? users[users.length - 1].id : 0;
    let id = (JSON.parse(localStorage.getItem('users')).length < 1) ? 1 : lastId + 1;
    return id;
  }

  public static verifyUser( user : User ) {
    let isRegistered : boolean;
    this.readUser( ( data ) => {
      if(data)
        isRegistered = ( data.findIndex( ( i ) => i.userName === user.userName ) == -1 ) ? false : true;
      else
        isRegistered = false;   
    })
    return isRegistered;
  }

  public static verifyPassword (user : User) {
    let isRegistered : boolean;
    this.readUser( ( data ) => {
      if(data != null)
        isRegistered = ( data.findIndex( ( i ) => i.password === user.password ) == -1 ) ? false : true;
      else
        isRegistered = false;
    })
    return isRegistered; 
  }

  public static createUser( user : User ) {
    this.readUser(data => {
      if(!data)
        data = [];
      data.push(user);
      localStorage.setItem('users', JSON.stringify(data));
    })
  }

  public static readUser( callback : ( data : any[] ) => void ) {
    const users : User[] = JSON.parse( localStorage.getItem( 'users' ) );
    callback( users );
  }

  public static getUserId (username : string) : number {
    let id : number;
    this.readUser( (data) => {
      let index : number = data.findIndex( (i) => i.userName === username.toLowerCase());
      console.log(index);
      id = data[index].id;
    })
    return id;
  }

}