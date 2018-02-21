import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule }    from '@angular/material/list';


@NgModule({
  imports: [
    MatDividerModule,
    MatListModule

    // MatTab,
    // MatTabGroup,
    // MatCard,
    // MatCardContent
  ],
  exports: [
    MatDividerModule,
    MatListModule
    // MatTab,
    // MatTabGroup,
    // MatCard,
    // MatCardContent
  ],
  declarations: []
})
export class AngularMaterialModule { }
