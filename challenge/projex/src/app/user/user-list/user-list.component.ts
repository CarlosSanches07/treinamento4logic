import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControllerService } 			from '../../controller.service';
import { Subscription } 	 			from 'rxjs/Subscription';

import { UserModel } from '../user-model';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  constructor(
  	private controller : ControllerService
  	) { }

  subscriber : Subscription;
  userList 	 : UserModel[];

  ngOnInit() {
	this.subscriber = this.controller.listAll('users')
		.subscribe((data) => {
			this.userList = data;
		})  	
  }

  ngOnDestroy(){
  	if(this.subscriber)
  		this.subscriber.unsubscribe();
  }
}
