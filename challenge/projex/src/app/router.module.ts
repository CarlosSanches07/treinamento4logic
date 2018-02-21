import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*DASHBOARD COMPONENT*/

import { DashboardComponent } from './dashboard/dashboard.component';

/*USER COMPONENTS*/
import { UserListComponent }   from './user/user-list/user-list.component';
import { UserInfoComponent }   from './user/user-info/user-info.component';
import { UserFormComponent }   from './user/user-form/user-form.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';

/*PROJECT COMPONENTS*/
import { ProjectListComponent }   from './project/project-list/project-list.component';
import { ProjectInfoComponent }   from './project/project-info/project-info.component';
import { ProjectFormComponent }   from './project/project-form/project-form.component';
import { ProjectDeleteComponent } from './project/project-delete/project-delete.component';

const routes = [
	{
		path : '',
		component : DashboardComponent,
		children : [
			{
				path 	  : 'user',
				component : UserListComponent,
				children  : [
					{path : 'new', 		  	  component : UserFormComponent},
					{path : 'edit/:id',   	  component : UserFormComponent},
					{path : 'info/:id',   	  component : UserInfoComponent},
					{path : 'deleteUser/:id', component : UserDeleteComponent}
				]
			},
			{
				path 	  : 'project',
				component : ProjectListComponent,
				children  : [
					{path : 'new', 		  component : ProjectFormComponent},
					{path : 'edit/:id',   component : ProjectFormComponent},
					{path : 'info/:id',   component : ProjectInfoComponent},
					{path : 'delete/:id', component : ProjectDeleteComponent}
				]
			}
		]		
	}
];

@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})

export class Router { };