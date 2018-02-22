import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControllerService } 			from '../../controller.service';
import { Subscription }					from 'rxjs/Subscription';
import { MatDialog}						from '@angular/material/dialog'

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit, OnDestroy {

  constructor(
  	private controller  : ControllerService,
  	) { }

  subscribe : Subscription;

  ngOnInit() {

  }

  ngOnDestroy() {
  	if(this.subscribe)
  		this.subscribe.unsubscribe();
  }

}
