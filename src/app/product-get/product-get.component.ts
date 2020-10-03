import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Product[];
  events:any = [];
  user: string;
  userlogin: boolean;
  constructor(private ps: ProductsService, private router:Router) { 

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
   /* this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        
        this.products = data;
           
    }); */
    this.ps.getProducts().subscribe(
      
      (data:Product[]) => this.products = data,
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login'])
          }
        }
      }
    )
  }
  deleteProduct(idadmin) {
    this.ps.deleteProduct(idadmin).subscribe(res => {
      this.products.splice(idadmin, 1);
    });
  }

}
