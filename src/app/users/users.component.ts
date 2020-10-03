import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import  User  from '../User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
}) 
export class UsersComponent implements OnInit {

  products: User[];
  user: string;
  userlogin: boolean;

  constructor(private us: UserService) { 
    if (localStorage.getItem('name') !== null) { 
      this.user = localStorage.getItem('name');
      this.userlogin = true;
    }
    else {
      this.user = '';
      this.userlogin = false;
    }
  }

  ngOnInit() { 
    this.us
    .getProducts()
    .subscribe((data: User[]) => { 
      this.products = data;
  }); 
  }
  deleteProduct(id) {
    this.us.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
  }

}
