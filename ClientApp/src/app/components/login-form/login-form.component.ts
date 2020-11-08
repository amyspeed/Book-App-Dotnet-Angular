import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginUserForm: FormGroup;
  signupUserForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginUserForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(10)])]
    })

    this.signupUserForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(10)])]
    })
  }

  onSubmitLogin() {
    console.log("login Clicked", this.loginUserForm.value);

    // this.auth.login(this.loginUserForm.value)
    
    // .subscribe(data => {
    //   console.log(data);
    // }, err => {
    //   this.showLoginError = true;
    //   console.log(err);

    //   //this is an array of errors that we will map through in the HTML file
    //   this.errors = err.error;
    // })
  }

  onSubmitRegister() {
    console.log("register Clicked", this.signupUserForm.value);

    this.auth.register(this.signupUserForm.value);
    
    // .subscribe(data => {
    //   console.log(data);
    // }, err => {
    //   this.showRegisterError = true;
    //   console.log(err);

    //   //this is an array of errors that we will map through in the HTML file
    //   this.errors = err.error;
      
    // })
   }

}
