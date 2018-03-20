using System;

namespace Activity.Obj.Model {

	public class Base : IBase{
	  
		public String Title;
		public String Comments;

		public Int32 Id {get; set;}
		public Boolean Removed  {get; set;} 

		public void Print() {
			Console.WriteLine("rá");
		}

		public void setRemoved() {
			Removed = true;
		}

	}

}