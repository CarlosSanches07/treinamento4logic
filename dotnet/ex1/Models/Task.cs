using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Utils;

namespace Models {
	public class Task : Base {
	  public float WorkHours;
	  public ETaskType Type;

		public static Task getTask ( Int32 id
															 , String title
															 , String comments
															 , float  workHours
															 , ETaskType type)
		{
			return new Task {
				Id 				= id,
				Title 			= title,
				Comments 		= comments,
				WorkHours 		= workHours,
				Type 			=	type
			};
		}

		public override void Print()
		{
	  		Console.WriteLine
	  		("\nId: "					+ Id
	  		+"\nTitle: " 				+ Title
	  		+"\nComments: " 			+ Comments
	  		+"\nWorkHours: "		 	+ WorkHours
	  		+"\nType: "				 	+ Type
	  		);
	  	}

		public override void Create(object o)
		{
			String query = "insert into projects.tasks (title, comments, workhours, type) values (@Title, @Comments, @WorkHours, @Type)";
			String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
			Db db = new Db(conn);
			db.Connect();
			SqlCommand cmd = new SqlCommand(query, db.Connection);
			cmd.Parameters.Add(new SqlParameter("Title", Title));
            cmd.Parameters.Add(new SqlParameter("Comments", Comments));
            cmd.Parameters.Add(new SqlParameter("WorkHours", WorkHours));
            cmd.Parameters.Add(new SqlParameter("Type", Type));
			var i = cmd.ExecuteNonQuery();
			if (i > 0)
			{
				Console.WriteLine("Data inserted");
			}
			else
			{
				Console.WriteLine("Sql error");
			}
			db.Disconnect();
        }

		public override dynamic Read (int id)
		{
			Task t = null;
            String query = "select * from projects.tasks where id = @Id";
            String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
            Db db = new Db(conn);
            db.Connect();
            SqlCommand cmd = new SqlCommand(query, db.Connection);
            cmd.Parameters.Add(new SqlParameter("Id", id));
			SqlDataReader reader = cmd.ExecuteReader();
			try
			{
				while (reader.Read())
				{
					t = getTask ( reader.GetInt32(0)
								, reader.GetString(1)
								, reader.GetString(2)
								, reader.GetFloat(3)
								, (reader.GetInt32(4) == 0) ? ETaskType.Codificacao : (reader.GetInt32(4) == 1) ? ETaskType.Caso_de_teste : ETaskType.Defeito);
				}
			}
			catch (System.Exception)
			{
				
				throw;
			}
			db.Disconnect();
			return t;
		}

		public override void Update (object o)
		{	
			Task t = o as Task;
            String query = "update projects.tasks set title = @Title, comments = @Comments, workhours = @WorkHours, task_type = @Type where id = @id";
            String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
            Db db = new Db(conn);
            db.Connect();
            SqlCommand cmd = new SqlCommand(query, db.Connection);
            cmd.Parameters.Add(new SqlParameter("Id", t.Id));
            cmd.Parameters.Add(new SqlParameter("Title", t.Title));
            cmd.Parameters.Add(new SqlParameter("Comments", t.Comments));
            cmd.Parameters.Add(new SqlParameter("WorkHours", t.WorkHours));
            cmd.Parameters.Add(new SqlParameter("Type", t.Type));
			var i = cmd.ExecuteNonQuery();
			if (i > 0)
			{
				Console.WriteLine("Data updated");
			}
			else
			{
				Console.WriteLine("Sql error");
			}
			db.Disconnect();
		}

		public override void Delete(int id)
		{
            String query = "delete from projects.tasks where id = @Id";
            String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
            Db db = new Db(conn);
            db.Connect();
            SqlCommand cmd = new SqlCommand(query, db.Connection);
            cmd.Parameters.Add(new SqlParameter("Id", id));
            var i = cmd.ExecuteNonQuery();
            if (i > 0)
            {
                Console.WriteLine("Data updated");
            }
            else
            {
                Console.WriteLine("Sql error");
            }
            db.Disconnect();
		}

		public override dynamic List()
		{
			List<Task> tasks = new List<Task>();
            String query = "select * from projects.tasks";
            String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
            Db db = new Db(conn);
            db.Connect();
            SqlCommand cmd = new SqlCommand(query, db.Connection);
			SqlDataReader reader = cmd.ExecuteReader();
            try
            {
                while (reader.Read())
                {
                    tasks.Add ( getTask ( reader.GetInt32(0)
                                		, reader.GetString(1)
                                		, reader.GetString(2)
                                		, reader.GetFloat(3)
                                		, (reader.GetInt32(4) == 0) ? ETaskType.Codificacao : (reader.GetInt32(4) == 1) ? ETaskType.Caso_de_teste : ETaskType.Defeito)
										);
                }
            }
            catch (System.Exception)
            {

                throw;
            }
            db.Disconnect();
			return tasks;
		}
	}
}