import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModel }		 			          from '../user-model';
import { Subscription }		 			        from 'rxjs/Subscription';
import { ControllerService } 			      from '../../controller.service';
import { Router, ActivatedRoute }       from '@angular/router'; 

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnDestroy {

  subscribe : Subscription;
  user : UserModel;

  constructor(
  	private controller  : ControllerService,
  	private router		  : Router,
    private actRoute    : ActivatedRoute
  	) { }

  ngOnInit() {
    this.subscribe = this.actRoute.params.subscribe((params : any) => {
      this.getInfo();
    })
  }

  ngOnDestroy() {
  	if(this.subscribe)
  		this.subscribe.unsubscribe();
  }

  getInfo () {
	  const id : string = this.router.url.split('/')[3];
    this.subscribe = this.controller.getById(id, 'users')
      .subscribe((data : UserModel) => {
       this.user = data;
    console.log(this.user)

    })
  }

}
