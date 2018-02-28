import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } 				        from 'rxjs/Subscription';
import { ControllerService } 			      from '../../controller.service';
import { ProjectModel } 				        from '../project-model';
import { Router }                       from '@angular/router';
import { MatDialog }                    from '@angular/material/dialog';
import { ProjectDeleteComponent }       from '../project-delete/project-delete.component';
import { environment }                  from '../../../environments/environment';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  constructor(
  	private controller : ControllerService,
    private router : Router,
    private dialog : MatDialog
  	) { }

  subscriber : Subscription;
  projectList : ProjectModel[];

  ngOnInit() {
    this.getElements();
  }

  ngOnDestroy() {
  	if(this.subscriber)
  		this.subscriber.unsubscribe();
  }

  getElements(){
    this.subscriber = this.controller.listAll('projects')
      .subscribe((data) => {
        this.projectList = data;
      })
  }

  delete (id : string) {
    const dialogRef = this.dialog.open(ProjectDeleteComponent);
    if(id)
      dialogRef.componentInstance.identifier = id;
    dialogRef.afterClosed().subscribe(result => {
      this.getElements();
    })
  }

  search (name : string) {
    let newList = new Array;
    this.controller.listAll('projects')
      .subscribe((data) => {
        newList = data;
        this.projectList = newList.filter(project => project.name.toLowerCase().includes(name.toLowerCase()));
      })
  }
}
