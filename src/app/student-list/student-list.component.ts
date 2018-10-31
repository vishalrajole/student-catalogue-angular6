import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as _ from 'lodash';

import { StudentService } from "../services/student/student.service";
import { Student } from '../model/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  noSearchResultFound: Boolean = false;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudents()
      .subscribe(data => {
        console.log('inside fetch: ', data);
        this.students = data.students;
      });
  }

  addStudent() {
    this.router.navigate(['add-student']);
  };

  editStudent(student: Student): void {
    localStorage.removeItem("editRollNo");
    localStorage.setItem("editRollNo", student.rollno.toString());
    this.router.navigate(['edit-student']);
  };

  search(term: string) {
    this.noSearchResultFound = false;
    if (term) {
      this.studentService.searchStudent(term).subscribe(data => {
        if (data && data.students.length) {
          this.students = data.students;
        } else {
          this.noSearchResultFound = true;
        }
      });
    } else {
      this.fetchStudents();
    }
  }

  showMore() {
    var skipCount = this.students.length;
    this.studentService.getStudents(skipCount)
      .subscribe(data => {
        this.students.push(...data.students)
      });
  }
}
