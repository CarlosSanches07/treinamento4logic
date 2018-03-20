using System;

namespace Activity.Obj.Model {

	public class Person {
	  public DateTime birth;
	  public Person father;
	  public String email;

	  public static Person getPerson() {
	  	return new Person();
	  } 

	}

}