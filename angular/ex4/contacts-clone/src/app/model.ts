export class Model {
  
  public firstName     :  string;
  public lastName :  string;
  public email    :  string;
  // public imgUrl   :  string;
  public info     :  {
    avatar : string;    
    // company  :  string,
    // address  :  string,
    // phone    :  string,
    // comments :  string
  
  };


  constructor (
    
    name     : string,
    lastName : string,
    email    : string,
    info     : {
        avatar   : string
    }
    // imgUrl   : string,
    /*info     : {
      company  :  string,
      address  :  string,
      phone    :  string,
      comments :  string
    }*/

      )
    {

      this.firstName  =  name;
      this.lastName   =  lastName;
      this.email      =  email;
      this.info       =  info;

    }
}
