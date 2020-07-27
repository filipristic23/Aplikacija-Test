import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  

  // njegov uri -> uri = 'http://localhost:63760/api/Products';
  uri = 'http://localhost:5000/api/v1/employees'; 

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
  editProduct(iduser) {
    return this
            .http
            .get(`${this.uri}/${iduser}`);
  }
  updateProduct(name, email, password, idadmin) {
    const obj = {
      idadmin,
      name,
      email,
      password
    };
    this
      .http
      .put(`${this.uri}/${idadmin}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteProduct(idadmin) {
    console.log(idadmin);
    return this
              .http
              .delete(`${this.uri}/${idadmin}`);
  }
}
