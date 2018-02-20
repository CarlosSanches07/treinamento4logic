export class UserModel {
	
	public id		  : string;
	public name  	  : string;
	public email 	  : string;
	public phone 	  : string;
	public birth 	  : Date;
	public workload   : Date;
	public scholarity : string;

	constructor (
		id			: string,
		name		: string,
		email		: string,
		phone		: string,
		birth		: Date,
		workload	: Date,
		scholarity	: string

		) 
	{
		this.id			= id;
		this.name 		= name;
		this.email 		= email; 
		this.phone 		= phone; 
		this.birth 		= birth;
		this.workload   = workload; 
		this.scholarity = scholarity; 
	}
}
