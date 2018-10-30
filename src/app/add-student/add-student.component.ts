import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { StudentService } from "../services/student/student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private studentService: StudentService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      rollno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      name: ['', Validators.required],
      degree: ['', Validators.required],
      city: ['', Validators.required]
    });
  }
  get formControls() { return this.addForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.studentService.addStudent(this.addForm.value)
      .subscribe(data => {
        console.log('user added:', data);
        this.router.navigate(['list-student']);
      });
  }

}
