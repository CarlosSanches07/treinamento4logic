using System;

namespace Models {

	public interface IBase {
		
		Int32 Id { get; set; } 
		Boolean Removed { get; set; }	
		void Print();

		void Create(object o);

		dynamic Read(int id);

		void Update(object o);

		void Delete(int id);

		dynamic List();
	}
	
}