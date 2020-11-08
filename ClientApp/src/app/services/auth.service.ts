import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  showLoginError: Boolean = false;
  showRegisterError: Boolean = false;
  errors: any = null;

  _baseUrl: string = "api/auth";

  constructor(private http: HttpClient) { }


  register(user: User) {
    this.showRegisterError = false;
    this.showLoginError = false;

    this.http.post<any>(this._baseUrl, user).subscribe(res => {
      // localStorage.setItem('token', res.body)
      // var token = localStorage.getItem('token');
      // console.log("this is in local storage: ", token)
      console.log(res)
    // }, err => {
    //   this.showRegisterError = true;
    //   console.log(err)
    //   this.errors = err.error;
    })
  }
}