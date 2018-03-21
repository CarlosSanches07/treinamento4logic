using System;

namespace Models {

	public class Person : Base {
	  public DateTime Birth;
	  public Person Father;
	  public String Email;

	  public static Person getPerson() {
	  	return new Person{
	  		Id 				= 14,
	  		Title 		= "João",
	  		Comments 	= "aishdqa",
	  		Birth 		= new DateTime(2000, 02, 14),
	  		Father 		= new Person(),
	  		Email 		= "iadsosdo@aisodad.com"
	  	};
	  }

	  public override void Print() {
	  	Console.WriteLine
	  		("Id: "				+ Id
	  		+"Title: " 		+ Title
	  		+"Comments: " + Comments
	  		+"Birth: " 		+ Birth
	  		+"Father: " 	+ Father
	  		+"Email: " 		+ Email
	  		);
	  } 
	}

}