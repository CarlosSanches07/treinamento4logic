import { Component, OnInit, OnDestroy }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators }            from '@angular/forms';
import { Subscription }                                  from 'rxjs/Subscription';
import { Router, ActivatedRoute }                        from '@angular/router';
import { ControllerService }                             from '../../controller.service';
import { ValidatorService }                              from '../../shared/validator/validator.service';
import { MatSnackBar }                                   from '@angular/material';
import { UserModel }                                     from '../user-model';
import { UserService }                                   from '../shared/services/user.service';
import { UserListComponent }                             from '../user-list/user-list.component'; 


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {

  constructor(
  	private builder      : FormBuilder,
    private router       : Router,
    private controller   : ControllerService,
    private actRoute     : ActivatedRoute,
    private valid        : ValidatorService,
    private snack        : MatSnackBar,
    private userService  : UserService,
    private userList     : UserListComponent
  	) { }

  userForm  : FormGroup;
  subscribe : Subscription;
  

  public phoneMask = ['+', /[0-9]/, /\d/, ' ', '(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/];
  
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

  scholarity = [
    "Primary school",
    "High school",
    "College",
    "Postgraduate",
    "Master's degrees",
    "Research doctorates"
  ];

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
  		name 		    : [null, [Validators.required, this.valid.name]]  ,
		  email 		  : [null, [Validators.required, this.valid.email]],
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

  submit(data : any) { 
    if(data.status.includes("INVALID")){
      this.snack.open("ERROR", "Please fill all the required fields",{
        duration : 2000
      });
      return;

    }
    const user : UserModel = data.value;

    if(this.router.url.includes('edit')){
      if(this.checkEditedEmail(user)){
        this.snack.open("ERROR", "This EMAIL is already beeing used", {
          duration : 2000
        });
        return;
      } else {
        this.editData(user);
      }
    }else {
      if(this.checkEmail(user)) {
        this.snack.open("ERROR", "This EMAIL is already beeing used", {
        duration : 2000
      });
      return;
    }
      this.createData(user);
    }
    
  }

  checkEmail(user : UserModel) : boolean {
    const checkArray = this.userService.userList.filter((i) => i.email.includes(user.email));
    return checkArray.length > 0;
  }

  checkEditedEmail(user : UserModel) : boolean{
    const id = this.router.url.split('/')[3];
    const oldUser : UserModel[] = this.userService.userList.filter(i => i._id.includes(id));
    if(oldUser[0].email === user.email)
      return false;
    else {
      return this.checkEmail(user);
    }
  }

  editData(user : UserModel) {
    const id : string = this.router.url.split('/')[3];
    user._id = id;
    this.subscribe = this.controller.update(user, 'users')
      .subscribe((data) => {
        if (data !== "#") {
          this.snack.open("SUCCESS", "Employee successfully updated", {
            duration : 2000
          })
          let newList : UserModel[] = this.userService.getList();
          let index = newList.findIndex(i => i._id === user._id);
          newList[index] = user;
          this.userService.setList(newList);
          this.userList.sidenav.close();
        } else {
          this.snack.open("ERROR", "SERVER ERROR", {
            duration : 2000
          })
          this.userList.sidenav.close();
            return;
        }
      })
  }

  createData(user : UserModel) {
    this.subscribe = this.controller.create(user, 'users')
      .subscribe((data) => {
        if(data !== "#"){
          this.snack.open("SUCCESS", "Employee created", {
            duration : 2000
          });
          user._id = data;
          let newList = this.userService.getList();
          newList.push(user)
          console.log(newList);
          this.userService.setList(newList);
          this.userList.sidenav.close();
        } else {
          this.snack.open("ERROR", "SERVER ERROR", {
            duration : 2000
          });
          this.userList.sidenav.close();
          return;
        }  
    })
  }
}
