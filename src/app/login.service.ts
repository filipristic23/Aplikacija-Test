import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:5000/register/login';
  msg = '';

  constructor(private http: HttpClient) { }

  checkLogin(email, password) {
    var ressult = '';
    console.log('Pozvao sam servis jeeesssss');
    const obj = {
      email,
      password
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe(data => this.f(data['success']));
  }

  f(params:string) {
    this.msg=params;
    window.localStorage.setItem('log', params);
  }
}
