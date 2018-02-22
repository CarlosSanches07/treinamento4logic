import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControllerService } from '../../controller.service';
import { ProjectModel } from '../project-model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit, OnDestroy {

  constructor(
  	private builder    : FormBuilder,
    private router     : Router,
    private controller :  ControllerService
  	) { 
  		
  	  }
  subscribe : Subscription
  project : ProjectModel;
  projForm : FormGroup;

  ngOnInit() {
  	this.createForm();
    if(this.router.url.includes('edit')){
      this.editChanges();
    }

  } 

  ngOnDestroy () {
    if(this.subscribe){
      this.subscribe.unsubscribe();
    }
  }

  createForm () {
  	this.projForm = this.builder.group({
  		name		: [null, Validators.required],
		  start		: [null, Validators.required],
		  finish		: [null, Validators.required],
		  boss		: [null, Validators.required],
		  description : [null, Validators.required],
		  team		: this.builder.group({
			  member : [null],
			  timeSpend :[null]
		  })
  	})
  }

  editChanges () {
    const id : string = this.router.url.split('/')[3];
    this.subscribe = this.controller.getById(id, 'projects')
      .subscribe((data) => {
        this.projForm.patchValue(data);
      })
  }

}
