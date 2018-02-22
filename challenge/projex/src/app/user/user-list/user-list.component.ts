import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControllerService } 			      from '../../controller.service';
import { Router }                       from '@angular/router';
import { Subscription } 	 			        from 'rxjs/Subscription';
import { UserModel }                    from '../user-model';
import { MatDialog }                    from '@angular/material/dialog';
import { UserDeleteComponent}           from '../user-delete/user-delete.component';
}
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  constructor(
  	private controller : ControllerService,
    private router     : Router,
    private dialog     : MatDialog 
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

  edit (id : string) {
    const url : string = `${this.router.url}/edit/${id}`;
    this.router.navigateByUrl(url); 
  }

  delete (id : string) {
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      height : '290px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
