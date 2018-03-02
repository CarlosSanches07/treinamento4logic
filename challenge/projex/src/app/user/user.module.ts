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
import { MatSnackBar }       from '@angular/material';
import { ValidatorService }  from '../shared/validator/validator.service';
import { UserService }       from './shared/services/user.service';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlexLayoutModule }      from '@angular/flex-layout';
import { TextMaskModule }        from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Router,
    FlexLayoutModule,
    TextMaskModule
  ],
  providers : [ControllerService, MatSnackBar, ValidatorService, UserService],
  declarations: [UserInfoComponent, UserFormComponent, UserDeleteComponent, UserListComponent]
})
export class UserModule { }
