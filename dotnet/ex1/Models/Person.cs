using System;
/*test*/
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
	  		("Id: "					+ Id
	  		+"\nTitle: " 		+ Title
	  		+"\nComments: " + Comments
	  		+"\nBirth: " 		+ Birth
	  		+"\nFather: " 	+ Father
	  		+"\nEmail: " 		+ Email
	  		);
	  } 
	}

}