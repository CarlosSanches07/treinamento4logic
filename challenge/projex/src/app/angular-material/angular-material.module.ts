import { NgModule }             from '@angular/core';

import { MatDividerModule }     from '@angular/material/divider';
import { MatListModule }        from '@angular/material/list';
import { MatFormFieldModule }   from '@angular/material/form-field';
import { MatInputModule }       from '@angular/material/input';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatMomentDateModule }  from '@angular/material-moment-adapter';
import { MatExpansionModule }   from '@angular/material/expansion';
import { MatButtonModule }      from '@angular/material/button';
import { MatSnackBarModule }    from '@angular/material/snack-bar';
import { MatSidenavModule}      from '@angular/material/sidenav';
import { MatIconModule }        from '@angular/material/icon';
import { MatMenuModule }        from '@angular/material/menu';
import { MatCardModule }		from '@angular/material/card';
import { MatChipsModule }       from '@angular/material/chips';
import { MatSelectModule }      from '@angular/material/select';



@NgModule({
  imports: [
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatExpansionModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule
  ],
  exports: [
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatExpansionModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
