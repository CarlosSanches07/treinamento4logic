using System;

namespace Models {

	public class Project : Base {
	  public String Code;
	  public DateTime StartDate;
	  public DateTime EstimatedEndDate;
	  public Nullable<DateTime> RealEndDate;
	  public Person Responsible;

	  public static Project GetProject() {
	  	return new Project {
	  		Id = 12,
	  		Removed = false,
	  		Title = "Test",
	  		Comments = "aaaahamdaksd",
	  		Code = "#a123" ,
	  		StartDate = new DateTime(2018,01, 01),
	  		EstimatedEndDate = new DateTime(2018, 02, 01),
	  		RealEndDate = null,
	  		Responsible = Person.getPerson(),
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