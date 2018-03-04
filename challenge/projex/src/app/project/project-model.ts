export class ProjectModel {
	
	public _id 		: string;
	public name 		: string;
	public start 		: Date;
	public finish 		: Date;
	public boss			: string;
	public description  : string;
	public team	: Team[];

	constructor(
		id			: string,
		name 		: string,
		start 		: Date,
		finish 		: Date,
		boss 		: string,
		description : string,
		team 		: Team[]
		)
	{
		this._id 	 	 = id;
		this.name 	 	 = name;
		this.start 	 	 = start;
		this.finish 	 = finish;
		this.boss 		 = boss;
		this.description = description;
		this.team 		 = team;
	}


}

export class Team {
	member : any;
	timeSpend : string
}
