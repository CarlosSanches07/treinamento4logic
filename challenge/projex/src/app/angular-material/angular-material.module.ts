import { NgModule } from '@angular/core';

import { MatDividerModule }     from '@angular/material/divider';
import { MatListModule }        from '@angular/material/list';
import { MatFormFieldModule }   from '@angular/material/form-field';
import { MatInputModule }       from '@angular/material/input';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatNativeDateModule }  from '@angular/material';
import { MatExpansionModule }   from '@angular/material/expansion';
import { MatButtonModule }      from '@angular/material/button';
import { MatSnackBarModule }    from '@angular/material/snack-bar';
import { MatSidenavModule}      from '@angular/material/sidenav';


@NgModule({
  imports: [
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule
  ],
  exports: [
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
