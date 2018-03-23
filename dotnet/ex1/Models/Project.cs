using System;

namespace Models {

	public class Project : Base {
	  public String Code;
	  public DateTime StartDate;
	  public DateTime EstimatedEndDate;
	  public Nullable<DateTime> RealEndDate;
	  public Person Responsible;
	  public Task[] TaskList;
	  public Person[] Users;

	  public static Project GetProject( Int32 id
	  																, String title
	  																, String comments
	  																, String code
	  																, DateTime startDate
	  																, DateTime estimatedEndDate
	  																, Person responsible) 
	  {
	  	return new Project {
	  		Id = id,
	  		Removed = false,
	  		Title = title,
	  		Comments = comments,
	  		Code = code,
	  		StartDate = startDate,
	  		EstimatedEndDate = estimatedEndDate,
	  		RealEndDate = null,
	  		Responsible = responsible,
	  	};
	  }

	  public Boolean MarkFinished() {
			Boolean isFinished;
			DateTime date = DateTime.Now;
				if(date > EstimatedEndDate) {
					RealEndDate = date;
					isFinished = true;
				} else {
					isFinished = false;
				}
			return isFinished; 
	  }

	  public override void Print() {
	  	String Deleted = Removed ? "Removed" : "Not Removed";
	  	Console.WriteLine
	  		("\n\tId: "									+ Id
	  		+"\n\tTitle: "							+ Title
	  		+"\n\tComments: "						+ Comments
	  		+"\n\tCode: "								+ Code
	  		+"\n\tStartDate: "					+ StartDate
	  		+"\n\tEstimatedEndDate: "		+ EstimatedEndDate
	  		+"\n\tRealEndDate: "				+ RealEndDate
	  		+"\n\tResponsible: "				+ Responsible.Title
	  		+"\n\tRemoved: "						+ Deleted
	  		);
	  }


	}

}