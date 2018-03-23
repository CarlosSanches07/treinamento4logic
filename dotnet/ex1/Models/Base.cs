using System;

namespace Models {

	public class Base : IBase{
	  
		public String Title;
		public String Comments;

		public Int32 Id {get; set;}
		public Boolean Removed  {get; set;} 

		public virtual void Print() {
			Console.WriteLine("rá");
		}

		public void SetRemoved() {
			Removed = true;
		}	

	}

}