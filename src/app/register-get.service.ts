import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterGetService {

  uri = 'http://localhost:5000/get'; 

  constructor(private http: HttpClient) { }

  getProducts() {
       return this.http.get(`${this.uri}`);
   }
}
