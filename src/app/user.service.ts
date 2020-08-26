import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:5000/users'; 

  constructor(private http: HttpClient) { }
 
  getProducts() {
   /* console.log('Pozvao sam servis2 jeeesssss');
    return this
           .http
           .get(`${this.uri}`);*/
           console.log('Pozvao sam servis2 jeeesssss');
            return this.http.get(`${this.uri}`);
  }
  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
  }
  updateProduct(name, email, password, cityname, id) {
    const obj = {
      id,
      name,
      email,
      password,
      cityname
    };
    this
      .http
      .put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteProduct(id) {
    console.log(id);
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }
}

