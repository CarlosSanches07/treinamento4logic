import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

/*COMPONENTS*/
import { ProjectInfoComponent }   from './project-info/project-info.component';
import { ProjectFormComponent }   from './project-form/project-form.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import { ProjectListComponent }   from './project-list/project-list.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router }            from '../router.module';
import { ControllerService } from '../controller.service';
import { FlexLayoutModule }  from '@angular/flex-layout';
import { ProjectService }    from './shared/services/project.service';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    Router,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [ControllerService, ProjectService],
  declarations: [ProjectInfoComponent, ProjectFormComponent, ProjectDeleteComponent, ProjectListComponent]
})
export class ProjectModule { }