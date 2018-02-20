import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../../controller.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
  	private controller : ControllerService
  	) { console.log(controller) }


  ngOnInit() {
  }


}
