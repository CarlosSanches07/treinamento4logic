import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoComponent } from './user-info/user-info.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserListComponent } from './user-list/user-list.component';

import { ControllerService } from '../controller.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers : [ControllerService],
  declarations: [UserInfoComponent, UserFormComponent, UserDeleteComponent, UserListComponent]
})
export class UserModule { }
