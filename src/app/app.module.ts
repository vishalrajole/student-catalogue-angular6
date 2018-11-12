import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginService } from './services/login/login.service';
import { StudentService } from './services/student/student.service';
import { ErrorService } from './services/error/error.service';
import { RouteValidatorService } from './services/route-validator/route-validator.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, StudentService, RouteValidatorService, {
    provide: ErrorService,
    useClass: ErrorHandler,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
