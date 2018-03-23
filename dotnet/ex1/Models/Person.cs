using System;

namespace Models {

	public class Person : Base {
	  public DateTime Birth;
	  public Person Father;
	  public String Email;

	  public static Person getPerson( Int32 id
	  															, String title
	  															, String comments
	  															,	DateTime bitrh
	  															, Person father
	  															,	String email) {
	  	return new Person{
	  		Id 				= id,
	  		Title 		= title,
	  		Comments 	= comments,
	  		Birth 		= bitrh,
	  		Father 		= father,
	  		Email 		= email
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