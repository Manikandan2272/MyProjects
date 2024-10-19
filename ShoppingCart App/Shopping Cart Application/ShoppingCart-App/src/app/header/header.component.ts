import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Service/users.service';
import { Router } from '@angular/router';
import { ProductsService } from '../Service/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCounts: number = 0;

  constructor(public userSer: UsersService, private router: Router, public pdtSer: ProductsService) {

  }

  ngOnInit(): void {
    this.pdtSer.updateCart.subscribe({
      next: (data?: any) => {
        console.log("Subject Emitted " + data);
        this.getCartCounts();
      }
    });

    this.getCartCounts();
  }

  getCartCounts() {
    this.pdtSer.getCartCounts().subscribe({
      next: (data: number) => {
        this.cartCounts = data;
        this.pdtSer.cartCount = data;
      }
    });
  }

  doLogout() {
    this.cartCounts = 0;
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

}
