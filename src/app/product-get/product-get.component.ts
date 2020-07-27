import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Product[];
  user: string;
  userlogin: boolean;
  constructor(private ps: ProductsService) { 
    if (localStorage.getItem('UserMail') !== null) {
      this.user = localStorage.getItem('UserMail');
      this.userlogin = true;
    }
    else {
      this.user = '';
      this.userlogin = false;
    }
  }

  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => { 
        this.products = data;
    }); 
  }
  deleteProduct(idadmin) {
    this.ps.deleteProduct(idadmin).subscribe(res => {
      this.products.splice(idadmin, 1);
    });
  }

}
