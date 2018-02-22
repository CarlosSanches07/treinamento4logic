import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '../router.module';

import { UserInfoComponent } from './user-info/user-info.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserListComponent } from './user-list/user-list.component';

import { ControllerService } from '../controller.service';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Router
  ],
  providers : [ControllerService],
  declarations: [UserInfoComponent, UserFormComponent, UserDeleteComponent, UserListComponent]
})
export class UserModule { }
