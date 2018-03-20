using System;

namespace Activity.Obj.Model{

	public interface IBase {
		
		Int32 Id { get; set; } 
		Boolean Removed { get; set; }	
		void Print();
	}
	
}