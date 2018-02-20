import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*COMPONENTS*/
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import { ProjectListComponent } from './project-list/project-list.component';


import { ControllerService } from '../controller.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ControllerService],
  declarations: [ProjectInfoComponent, ProjectFormComponent, ProjectDeleteComponent, ProjectListComponent]
})
export class ProjectModule { }