import { Component, OnInit, OnDestroy }       from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription }                       from 'rxjs/Subscription';
import { Router, ActivatedRoute }             from '@angular/router';
import { ControllerService }                  from '../../controller.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {

  constructor(
  	private builder    : FormBuilder,
    private router     : Router,
    private controller : ControllerService,
    private actRoute   : ActivatedRoute 
  	) { }

  userForm  : FormGroup;
  subscribe : Subscription;
  

  ngOnInit() {
    this.subscribe = this.actRoute.params.subscribe((params : any)=> {
    	this.createForm();
      if(this.router.url.includes('edit')){
        this.editChanges();
      }
    })
  }

  ngOnDestroy() {
    if(this.subscribe)
      this.subscribe.unsubscribe();
  }

  createForm () {
  	this.userForm = this.builder.group({
  		name 		    : [null, Validators.required],
		  email 		  : [null, Validators.required],
		  phone 		  : [null, Validators.required],
		  birth 		  : [null, Validators.required],
		  workload 	  : [null, Validators.required],
		  scholarity  : [null, Validators.required]
  	})
  }

  editChanges (){
    const id : string = this.router.url.split('/')[3];
      this.subscribe = this.controller.getById(id, 'users')
        .subscribe((data) => {
          this.userForm.patchValue(data);
    })
  }

}
