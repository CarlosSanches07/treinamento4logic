using System;
using Utils;
using System.Data.SqlClient;
using System.Collections.Generic;

namespace Models {

	public class Person : Base {
	  public DateTime Birth;
	  public Person Father;
	  public String Email;

	  public static Person getPerson( Int32 id
	  								, String title
	  								, String comments
	  								, DateTime bitrh
	  								, String email) 
		{
	  		return new Person{
	  			Id 				= id,
	  			Title 		= title,
	  			Comments 	= comments,
	  			Birth 		= bitrh,
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

		public void Create (Person p)
			{
				String query = "insert into persons.user_data (title, comments, birth, father, emaail) values(@Title, @Comments, @Birth, @Father, @Email)";
				String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
				Db db = new Db(conn);
				db.Connect();
				SqlCommand cmd = new SqlCommand(query, db.Connection);
				cmd.Parameters.Add(new SqlParameter("Title", p.Title));
    	    	cmd.Parameters.Add(new SqlParameter("Comments", p.Comments));
    	    	cmd.Parameters.Add(new SqlParameter("Birth", p.Birth));
    	    	cmd.Parameters.Add(new SqlParameter("Father", p.Father));
    			cmd.Parameters.Add(new SqlParameter("Email", p.Email));
				var i = cmd.ExecuteNonQuery();
				if (i > 0)
				{
					Console.WriteLine("Data Inseted");
				}
				else
				{
					Console.WriteLine("No rows inseted");
				}
				db.Disconnect();
    	    }

		public override dynamic Read (int id)
		{
			Person p = null;
			String query = "select * from persons.user_data where id = @Id";
			String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
			Db db = new Db(conn);
			db.Connect();
			SqlCommand cmd = new SqlCommand(query, db.Connection);
			cmd.Parameters.Add(new SqlParameter("Id", id));
			SqlDataReader reader = cmd.ExecuteReader();
			try
			{
				while(reader.Read())
				{
					p = getPerson 	( reader.GetInt32(0) 
									, reader.GetString(1)
									, reader.GetString(2)
									, reader.GetDateTime(3)
									, reader.GetString(5) );
				}
			}
			catch (System.Exception)
			{
				Console.WriteLine("Sql Error");
			}
			db.Disconnect();
            return p;
		}

		public override void Update(object o) {
			Person p = o as Person;
            String query = "update persons.user_data set title = @Title, comments = @Comments, birth = @Birth, email = @Email where id = @Id";
			String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
            Db db = new Db(conn);
            db.Connect();
            SqlCommand cmd = new SqlCommand(query, db.Connection);
			cmd.Parameters.Add(new SqlParameter("Title", p.Title));
            cmd.Parameters.Add(new SqlParameter("Comments", p.Comments));
            cmd.Parameters.Add(new SqlParameter("Birth", p.Birth));
            cmd.Parameters.Add(new SqlParameter("Email", p.Email));
            cmd.Parameters.Add(new SqlParameter("Id", p.Id));
			var i = cmd.ExecuteNonQuery();
			if(i > 0) 
			{
				Console.WriteLine("Data updated");
			}
			else
			{
				Console.WriteLine("Sql Error");
			}
			db.Disconnect(); 
		}

		public override void Delete(int id)
		{
            String query = "delete from persons.user_data where id = @Id";
            String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
            Db db = new Db(conn);
            db.Connect();
            SqlCommand cmd = new SqlCommand(query, db.Connection);
            cmd.Parameters.Add(new SqlParameter("Id", id));
			var i = cmd.ExecuteNonQuery();
			if (i > 0)
			{
				Console.WriteLine("Data deleted");
			}
			else
			{
				Console.WriteLine("Sql Error");
			}
			db.Disconnect();
		}

		public override dynamic List () {
			List<Person> p = new List<Person>();
            String query = "select * from persons.user_data";
            String conn = "Data Source=localhost; Initial Catalog=dotnet; Integrated Security=false; User Id=sa; Password=abc123##";
            Db db = new Db(conn);
            db.Connect();
            SqlCommand cmd = new SqlCommand(query, db.Connection);
			SqlDataReader reader = cmd.ExecuteReader();
            try
			{
				while(reader.Read())
				{
					p.Add
					(
						getPerson	( reader.GetInt32(0)
									, reader.GetString(1)
									, reader.GetString(2)
									, reader.GetDateTime(3)
									, reader.GetString(5))
					);
				}
			}
			catch (System.Exception)
			{
				Console.WriteLine("Sql error");
			}
			db.Disconnect();
			return p;
		}
	}

}