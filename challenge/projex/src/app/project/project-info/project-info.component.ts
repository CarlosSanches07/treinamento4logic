import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }					from 'rxjs/Subscription';
import { ProjectModel }					from '../project-model';
import { ControllerService }			from '../../controller.service';
import { Router, ActivatedRoute }		from '@angular/router';
import * as moment                  from 'moment';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit, OnDestroy {

  subscribe : Subscription;
  proj		: ProjectModel;
  start;
  finish;

  constructor(
  	private controller	: ControllerService,
  	private router 		: Router,
  	private actRouter	: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.subscribe = this.actRouter.params.subscribe((params : any) => {
  		this.getInfo();
  	})
  }

  ngOnDestroy() {
  	if(this.subscribe)
  	  this.subscribe.unsubscribe();
  }

  getInfo() {
  	const id : string = this.router.url.split('/')[3];
  	this.subscribe = this.controller.getById(id, 'projects')
  		.subscribe((data : ProjectModel) => {
  			this.proj = data;
        this.start = moment(this.proj.start).format("DD/MM/YYYY");
        this.finish = moment(this.proj.finish).format("DD/MM/YYYY");
  		})
  }

}
