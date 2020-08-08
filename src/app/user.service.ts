import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:5000/users'; 

  constructor(private http: HttpClient) { }
  addProduct(name, email, password) {
    console.log('Pozvao sam servis jeeesssss');
    const obj = {
      name,
      email,
      password
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }
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
  updateProduct(name, email, password, id) {
    const obj = {
      id,
      name,
      email,
      password
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

