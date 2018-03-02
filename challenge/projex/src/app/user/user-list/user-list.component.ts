import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ControllerService } 			                 from '../../controller.service';
import { Router, ActivatedRoute }                  from '@angular/router';
import { Subscription } 	 			                   from 'rxjs/Subscription';
import { UserModel }                               from '../user-model';
import { MatDialog }                               from '@angular/material/dialog';
import { UserDeleteComponent}                      from '../user-delete/user-delete.component';
import { UserService }                             from '../shared/services/user.service';
import { MatSidenav }                              from '@angular/material';
import * as _ from 'lodash';

 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  constructor(
  	private controller   : ControllerService,
    private router       : Router,
    private dialog       : MatDialog,
    private actRouter    : ActivatedRoute,
    private userService  : UserService 
  	) { }

  @ViewChild('sidenav') sidenav : MatSidenav;
  subscriber : Subscription;
  close : boolean;
  
  ngOnInit() {
    this.subscriber = this.actRouter.params.subscribe((params : any) => {
  	  this.getElements();       
    })
  }

  ngOnDestroy(){
  	if(this.subscriber)
  		this.subscriber.unsubscribe();
  }

  getElements() {
    this.subscriber = this.controller.listAll('users')
      .subscribe((data) => {
        this.userService.setList(data);
      })
  }

  edit (id : string) {
    const url : string = `${this.router.url}/edit/${id}`;
    this.router.navigateByUrl(url); 
  }

  delete (id : string) {
    const dialogRef = this.dialog.open(UserDeleteComponent, {
     
    });
    if(id)
      dialogRef.componentInstance.identifier = id;
    dialogRef.afterClosed().subscribe(result => {
        this.getElements();
      })
  }

  search (name : string) {
    let newList = new Array;
    this.controller.listAll('users')
      .subscribe((data) => {
        newList = data;
        console.log(newList)
        this.userService.setList(newList.filter(user => user.name.toLowerCase().includes(name.toLowerCase())));
      })
  }

  test(test : boolean) {
     return test;
  }

}
