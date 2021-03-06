/*MODULES*/
import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { AppRoutingModule }                 from './app-routing.module';
import { HttpModule }                       from '@angular/http'

/*ANGULAR COMPONENTS*/
import { AppComponent }         from './app.component';
import { HeaderComponent }      from './header/header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';

/*MATERIAL MODULES*/
import { MatInputModule }     from '@angular/material/input';
import { MatButtonModule }    from '@angular/material/button';
import { MatListModule }      from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

/*SERVICES*/
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    ContactFormComponent
  ],
  imports: [
    /*ANGULAR IMPORTS*/
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,

    /*FORM IMPORTS*/
    ReactiveFormsModule,
    FormsModule,

    /*MATERIAL IMPORTS*/
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
