/*ANGULAR IMPORTS*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*COMPONENTS*/
import { AppComponent } from './app.component';

/*MODULES*/
import { HttpModule } from '@angular/http';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    ProjectModule,
    HttpModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
