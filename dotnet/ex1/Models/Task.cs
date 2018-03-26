using System;

namespace Models {
	public class Task : Base {
	  public Person Responsible;
	  public float WorkHours;
	  public ETaskType Type;

		public static Task getTask ( Int32 id
															 , String title
															 , String comments
															 , Person responsible
															 , float  workHours
															 , ETaskType type)
		{
			return new Task {
				Id 						= id,
				Title 				= title,
				Comments 			= comments,
				Responsible 	= responsible,
				WorkHours 		= workHours,
				Type 					=	type
			};
		}

		public override void Print() {
	  	Console.WriteLine
	  		("\nId: "							+ Id
	  		+"\nTitle: " 					+ Title
	  		+"\nComments: " 			+ Comments
	  		+"\nResponsible: "		+ Responsible.Title
	  		+"\nWorkHours: "		 	+ WorkHours
	  		+"\nType: "				 		+ Type
	  		);
	  } 
	}
}