import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  model: any = {};
  obj  
  loginx: boolean;
  loginMsg = '';
  constructor(private ls: LoginService) { }


  login(name, email, password) {
    this.obj={
      name,email,password
    }
    this.ls.loginForm(this.obj).subscribe(response => {
      if (response.msg === 'Logged in!') {
        this.ls.setUser(response);
        this.loginx = true;
      }
    }, error => {
      console.error(error);
    });
  }





  /*login(msg, token, user){
    this.ls.checkLogin(msg, token, user); 

    if (localStorage.getItem('log') !== 'login sucessfull' ) {
      this.loginx = false;
      this.loginMsg = 'Email or password is wrong.'
      
    }
    else
    {
      this.loginMsg = ''
      this.loginx = true;

      window.localStorage.setItem('Jwt', token);

      window.location.href = '/';
    }
    localStorage.removeItem('log');
    console.log(this.loginx);
 } ovaj zadnji zakomentarisao*/

  /*login(name, email, password){
    this.ls.checkLogin(name, email, password); 

    if (localStorage.getItem('log') !== 'login sucessfull' ) {
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
 }*/



  ngOnInit() {
  }
 
}
