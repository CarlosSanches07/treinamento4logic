using System;

namespace Models {

	public class Base : IBase{
	  
		public String Title;
		public String Comments;

		public Int32 Id {get; set;}
		public Boolean Removed  {get; set;} 

		public virtual void Print() {
			Console.WriteLine("");
		}

		public void SetRemoved() {
			Removed = true;
		
		}

		public virtual void Create(object o ){

		}

		public virtual dynamic Read(int id) {
			return null;
		}

		public virtual void Update(object o) {

		}

		public virtual void Delete(int id) {

		}

		public virtual dynamic List(){
			return null;
		} 

	}

}