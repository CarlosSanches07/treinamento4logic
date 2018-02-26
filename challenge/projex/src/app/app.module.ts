/*ANGULAR IMPORTS*/
import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/*COMPONENTS*/
import { AppComponent } from './app.component';

/*MODULES*/
import { HttpModule }            from '@angular/http';
import { UserModule }            from './user/user.module';
import { ProjectModule }         from './project/project.module';
import { DashboardComponent }    from './dashboard/dashboard.component';
import { Router }                from './router.module';
import { FlexLayoutModule }      from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    ProjectModule,
    HttpModule,
    Router,
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
