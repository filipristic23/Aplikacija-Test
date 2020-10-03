import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';
import { LoginResponse } from '../app/login.response';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
//stari podaci
  uri = 'http://localhost:5000/register/login';
  msg = '';

  constructor(private router:Router, private http: HttpClient) { }
 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  // Verify user credentials on server to get token
  loginForm(data): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.uri, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // After login save token and other values(if any) in localStorage
  setUser(resp: LoginResponse) {
    localStorage.setItem('name', resp.user.name);
    localStorage.setItem('token', resp.token);
    this.router.navigate(['/']);
  }

  // Checking if token is set
  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  //kupi token
  getToken() {
    return localStorage.getItem('token');
  }

  // After clearing localStorage redirect to login screen
  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }


  // Get data from server for Dashboard
  getData(data): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.uri, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


}



 /* checkLogin(name, email, password) {
    var ressult = '';
    console.log('Pozvao sam servis jeeesssss');
    const obj = {
      name,
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
}*/

/*
checkLogin(msg, token, user) {
  var ressult = '';
  console.log('Pozvao sam servis jeeesssss');
  const obj = {
    msg,
    token,
    user,
    
  };
  console.log(obj);
  this.http.post(`${this.uri}`, obj).subscribe(data => this.f(data['success']));
}

f(params:string) { 
  this.msg=params;
  window.localStorage.setItem('log', params);
}
}
*/

