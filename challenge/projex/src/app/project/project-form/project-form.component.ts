import { Component, OnInit, OnDestroy, ViewChild }       from '@angular/core';
import { FormBuilder, FormGroup, Validators }            from '@angular/forms';
import { Router }                                        from '@angular/router';
import { ControllerService }                             from '../../controller.service';
import { ProjectModel }                                  from '../project-model';
import { Subscription }                                  from 'rxjs/Subscription';
import { ActivatedRoute }                                from '@angular/router';
import { ValidatorService }                              from '../../shared/validator/validator.service';
import { MatSnackBar }                                   from '@angular/material';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit, OnDestroy {

  @ViewChild('inpFinish') finish : HTMLInputElement;
  @ViewChild('inpStart')  start  : HTMLInputElement;

  constructor(
  	private builder    : FormBuilder,
    private router     : Router,
    private controller : ControllerService,
    private actRouter  : ActivatedRoute,
    private valid      : ValidatorService,
    private snack      : MatSnackBar
    /*private projValid: ProjectValidatorService*/
  	) {  }

  // startDateMax  = this.finish.value;
  // finishDateMin = this.start.value;

  userList : any[];

  subscribe  : Subscription;
  subscribe2 : Subscription;
  project    : ProjectModel;
  projForm   : FormGroup;


   day = [
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00"
  ];

  workload = [];

  team = [];

  ngOnInit() {
    this.subscribe =  this.actRouter.params.subscribe((params : any) => {
      this.createForm();
      if(this.router.url.includes('edit')){
        this.editChanges();
      }      
    })
    this.subscribe2 = this.controller.listAll('users').subscribe((data) => {
      this.userList = data;
    })
  } 

  ngOnDestroy () {
    if(this.subscribe){
      this.subscribe.unsubscribe();
    }
    if(this.subscribe2){
      this.subscribe2.unsubscribe();
    }
  }

  createForm () {
  	this.projForm = this.builder.group({
  		name		: [null, [Validators.required, this.valid.name]],
		  start		: [null, Validators.required],
		  finish		: [null],
		  boss		: [null, [Validators.required, this.valid.email]],
		  description : [null, Validators.required],
		  team		: this.builder.group([{
			  member : [null],
			  timeSpend :[null]
		  }])
  	})
  }

  editChanges () {
    const id : string = this.router.url.split('/')[3];
    console.log(id);
    this.subscribe = this.controller.getById(id, 'projects')
      .subscribe((data) => {
        this.projForm.patchValue(data);
      })
  }

  submit (data : ProjectModel) {
      console.log(data);
  }

  setWorkload(user : any) {
    this.workload = [];
    let time = user.workload;
    let index = this.day.findIndex(i => i == time);
    for(let i = 0; i <= index; i++) {
      this.workload[i] = this.day[i];
    }
  }

  addMember(user : any, time : string){
    if(!user || !time)
      return;
    const member = {member : user, timeSpend : time}
    const test = this.team.filter(i => i.member.email === user.email);
    if(test.length > 0){
      this.snack.open("ERROR", "Employee's already in this project",{
        duration : 2000
      });;
      return;
    }else {
      this.team.push(member);
    }
  }

  removeMember(id : string) {
    const index = this.team.findIndex(i => i.member._id === id);
    this.team.splice(index, 1);
    console.log(this.team);
  }

}
