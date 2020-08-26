import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import  RegisterGet  from '../Register-get';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  products: RegisterGet[];  

  constructor(private rs: RegisterService) { }


  register(name, email, password, city){ 
    this.rs.addUser(name, email, password, city);
 }

  ngOnInit() {
    this.rs
    .getProducts()
    .subscribe((data: RegisterGet[]) => { 
      this.products = data;
    });
  }

}
