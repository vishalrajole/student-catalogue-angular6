import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { StudentService } from "../services/student/student.service";

import { Student } from '../model/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe(data => {
        console.log("inside get students: ", data)
        this.students = data.students;
      });
  }
  addStudent(): void {
    this.router.navigate(['add-student']);
  };
  editStudent(student: Student): void {
    localStorage.removeItem("editRollNo");
    localStorage.setItem("editRollNo", student.rollno.toString());
    this.router.navigate(['edit-student']);
  };
}
