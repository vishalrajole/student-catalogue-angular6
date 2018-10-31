import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  isError: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    this.loginService.login(username, password)
      .subscribe(data => {
        console.log("inside get students: ", data)
        this.router.navigate(['list-student']);
      },
        err => {
          this.isError = true;
          console.log("inside login component error: ", err)
        });
  }

}


