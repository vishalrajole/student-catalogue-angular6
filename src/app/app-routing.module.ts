import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RouteValidatorService } from './services/route-validator/route-validator.service';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list-student', component: StudentListComponent, canActivate: [RouteValidatorService] },
  { path: 'add-student', component: AddStudentComponent, canActivate: [RouteValidatorService] },
  { path: 'edit-student', component: EditStudentComponent, canActivate: [RouteValidatorService] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
