// using Person.cs;
using System;

namespace Acitivity.Obj.Model {

	public class Project {
	  public String Code;
	  public DateTime StartDate;
	  public DateTime EstimatedEndDate;
	  public Nullable<DateTime> RealEndDate;
	  // public Person Responsible;

	  public Project getProject() {
	  	return new Project();
	  }

	  public Boolean MarkFinished() {
	  	//fazer as paradas de finalizar os projeto e pah

	  	return true;
	  }
	}

}