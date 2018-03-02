import { Injectable } from '@angular/core';
import { ProjectModel }	from '../../project-model';

@Injectable()
export class ProjectService {

	projList : ProjectModel[];

  constructor() { }

  getList() : any[] {
  	return this.projList;
  }

  setList(list : any[]) {
  	this.projList = list
  } 
}
