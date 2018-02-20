export class ProjectModel {
	
	public id 		: string;
	public name 		: string;
	public start 		: Date;
	public finish 		: Date;
	public boss			: string;
	public description  : string;
	public team			: [
							{
								member    : string,
								timeSpend : Date
							}
						  ];

	constructor(
		id			: string,
		name 		: string,
		start 		: Date,
		finish 		: Date,
		boss 		: string,
		description : string,
		team 		: [
						{
							member 	  : string,
							timeSpend : Date
						}
					  ]
		)
	{
		this.id 	 	 = id;
		this.name 	 	 = name;
		this.start 	 	 = start;
		this.finish 	 = finish;
		this.boss 		 = boss;
		this.description = description;
		this.team 		 = team;
	}

}
