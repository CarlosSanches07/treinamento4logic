import { Component, OnInit, OnDestroy }	from '@angular/core';
import { ControllerService }			from '../../controller.service';
import { Subscription }					from 'rxjs/Subscription';
import { MatSnackBar }					from '@angular/material';
import { MatDialogRef }					from '@angular/material/dialog';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit, OnDestroy {

  constructor(
  	private controller	: ControllerService,
  	public 	snack		: MatSnackBar,
  	public	dialog		: MatDialogRef<ProjectDeleteComponent>
  	) { }

  subscribe 	: Subscription;
  identifier 	: string;

  ngOnInit() {
  }

  ngOnDestroy() {
  	if (this.subscribe)
  		this.subscribe.unsubscribe();
  }

  delete (email : string) {
  	this.subscribe = this.controller.getById(this.identifier, 'projects')
  		.subscribe((res) => {
  			if (res.boss == email) {
  				this.subscribe = this.controller.delete(this.identifier, 'projects')
  					.subscribe(res => console.log(res));
  				this.dialog.close()
  				this.snack.open(res.name, "Successfuly deleted",{
  					duration : 1999
  				})
  			} else {
  				this.dialog.close();
  				this.snack.open("ERROR", "Cannot Find Email", {
  					duration : 2000
  				})
  			}
  		})
  }
}
