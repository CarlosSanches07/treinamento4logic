import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } 				from 'rxjs/Subscription';
import { ControllerService } 			from '../../controller.service';
import { ProjectModel } 				from '../project-model';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  constructor(
  	private controller : ControllerService
  	) { }

  subscriber : Subscription;
  projectList : ProjectModel[];

  ngOnInit() {
  	this.subscriber = this.controller.listAll('projects')
  		.subscribe((data) => {
  			this.projectList = data;
  		})
  }

  ngOnDestroy() {
  	if(this.subscriber)
  		this.subscriber.unsubscribe();
  }

}
