using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Utils;

namespace Models {

	public class Project : Base {
	  public String Code;
	  public DateTime StartDate;
	  public DateTime EstimatedEndDate;
	  public Nullable<DateTime> RealEndDate;
	  public Person Responsible;
	  public Dictionary<Person, List<Task>> Tasks;
	  public List<Person> Members;

	  public static Project GetProject( Int32 id
	  																, String title
	  																, String comments
	  																, String code
	  																, DateTime startDate
	  																, DateTime estimatedEndDate
																	, Dictionary<Person, List<Task>> tasks
																	, List<Person> members
	  																, Person responsible ) 
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
			Tasks = tasks,
			Members = members,
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

	  	public override void Print()
		{
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

		public override void Create(object o)
		{
			String query = "insert into projects.project (title, comments, code, startDate, estimatedDate, )";
		}

		public override void Delete(int id)
		{
			String query = "delete from projects.project where id = @id";
            String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
			Db db = new Db(conn);
			db.Connect();
			SqlCommand cmd = new SqlCommand(query, db.Connection);
			var i = cmd.ExecuteNonQuery();
			if (i > 0)
			{
				Console.WriteLine("Data deleted");
			}
			else
			{
				Console.WriteLine("Sql error");
			}
			db.Disconnect();
		}

		public override dynamic List()
		{
			List<Project> projects = new List<Project>();
			String query = "select * form projects.project";
            String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
			Db db = new Db(conn);
			db.Connect();
			SqlCommand cmd = new SqlCommand(query, db.Connection);
			SqlDataReader reader = cmd.ExecuteReader();
			try
			{
				while (reader.Read())
				{
					projects.Add
					(
						GetProject  ( reader.GetInt32(0)
									, reader.GetString(1)
									, reader.GetString(2)
									, reader.GetString(3)
									, reader.GetDateTime(4)
									, reader.GetDateTime(5)
									, null
									, null
									, null )
					);					
				}
			}
			catch (System.Exception)
			{s
				Console.WriteLine("Sql error");
			}
			return projects;
		}
	}

}