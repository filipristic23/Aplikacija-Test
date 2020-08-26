import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  uri = 'http://localhost:5000/register';
  uri2 = 'http://localhost:5000/get'; 

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.uri2}`);
}

  addUser(name, email, password, city) {
    console.log('Pozvao sam servis jeeesssss'); 
    const obj = {
      name,
      email,
      password,
      city
    };
    
    console.log(obj);

  //  var check = this.http.get(`${this.uri}`, obj.email);
    // provjeri da li ima u bazi i jedan mail koji je prosljedzen.. ako ima ne poziva se kod ispod a ako nema onda pozvati...

    // var duplimail = poziv api(mail)  provjera u bazi da li ima mail koji smo dobili...
/*
    if(check == email) {
console.log('Email has been already taken');
    }
    else {
      this.http.post(`${this.uri}`, obj)
      .subscribe(res => console.log('Done'));
    } */

    this.http.post(`${this.uri}`, obj)
      .subscribe(res => console.log('Done'));
    
  }

}
