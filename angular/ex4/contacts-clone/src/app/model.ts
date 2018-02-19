export class Model {
  
  public name     :  string;
  public lastName :  string;
  public email    :  string;
  // public imgUrl   :  string;
/*  public info     :  {
    
    company  :  string,
    address  :  string,
    phone    :  string,
    comments :  string
  
  }*/;


  constructor (
    
    name     : string,
    lastName : string,
    email    : string,
    // imgUrl   : string,
    /*info     : {
      company  :  string,
      address  :  string,
      phone    :  string,
      comments :  string
    }*/

      )
    {

      this.name       =  name;
      this.lastName   =  lastName;
      this.email      =  email;
/*      this.info       =  info;*/

    }
}
