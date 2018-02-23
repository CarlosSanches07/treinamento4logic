import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControllerService } 		      	from '../../controller.service';
import { Subscription }			        		from 'rxjs/Subscription';
import { MatSnackBar }                  from '@angular/material';
import { MatDialogRef }                 from '@angular/material/dialog'

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit, OnDestroy {

  constructor(
  	private controller  : ControllerService,
    public  snack       : MatSnackBar,
    public  dialog      : MatDialogRef<UserDeleteComponent>
  	) { }

  subscribe : Subscription;
  identifier : string;
  ngOnInit() {

  }

  ngOnDestroy() {
  	if(this.subscribe)
  		this.subscribe.unsubscribe();
  }

  delete(email : string) {
    this.subscribe = this.controller.getById(this.identifier, 'users')
      .subscribe((res) => {
        if (res.email == email) {
          this.subscribe = this.controller.delete(this.identifier, 'users')
            .subscribe(res => console.log(res));
          this.dialog.close();
          this.snack.open(res.name, "successfully deleted", {
            duration : 2000
          })
        }
        else {
          this.snack.open("ERROR", "Cannot Find email",{
            duration : 2000
          })
        }

      })
  }  

}
