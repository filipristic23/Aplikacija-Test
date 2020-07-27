import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginx: boolean;
  loginMsg = '';
  constructor(private ls: LoginService) { }

  login(email, password){
    this.ls.checkLogin(email, password);

    if (localStorage.getItem('log') == 'Email does not exits') {
      this.loginx = false;
      this.loginMsg = 'Email or password is wrong.'
    }
    else
    {
      this.loginMsg = ''
      this.loginx = true;

      window.localStorage.setItem('UserMail', email);

      window.location.href = '/';
    }
    localStorage.removeItem('log');
    console.log(this.loginx);
 }


  ngOnInit() {
  }
 
}
