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
  noMoreRecords: Boolean = false;
  emptyStudents: Boolean = false;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudents()
      .subscribe(students => {
        console.log('inside fetch: ', students);
        if (students.length) {
          this.students = students;
        } else {
          this.emptyStudents = true;
        }
      }, error => {
        alert(`Oops, something went wrong.`)
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

  search(term: string) { //TODO debounce api calls using observables
    this.noSearchResultFound = false;
    if (term) {
      this.studentService.searchStudent(term).subscribe(result => {
        if (result && result.length) {
          this.students = result;
        } else {
          this.noSearchResultFound = true;
        }
      }, error => {
        alert(`Oops, something went wrong.`)
      });
    } else {
      this.fetchStudents();
    }
  }

  showMore() {
    var skipCount = this.students.length;
    this.studentService.getStudentsByPagination(skipCount)
      .subscribe(result => {
        console.log(result);
        if (result.length) {
          this.students.push(...result)
        } else {
          this.noMoreRecords = true;
        }
      }, error => {
        alert(`Oops, something went wrong.`)
      });
  }
}
