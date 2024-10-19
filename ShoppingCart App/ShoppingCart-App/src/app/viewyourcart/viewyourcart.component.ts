import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewyourcart',
  templateUrl: './viewyourcart.component.html',
  styleUrls: ['./viewyourcart.component.css']
})
export class ViewyourcartComponent implements OnInit {

  cartProducts: any[] = [];
  cartTotalPrice: number = 0;

  constructor(public pdtSer: ProductsService, private router: Router) { }

  ngOnInit(): void {

    this.pdtSer.getMyCartItems().subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.cartProducts = data;
        for (let cartData of this.cartProducts) {
          this.cartTotalPrice += cartData.cartPdtPrice;
        }
      },
      error: (error: any) => {
        if (error.status === 401) {
          localStorage.clear();
          this.router.navigateByUrl('/login');
        }
      }
    })

  }

  updateCart(cartId: number, cartQty: number, pdtPrice: number) {
    this.pdtSer.updateCartItems(cartId, cartQty, pdtPrice).subscribe({
      next: (data: string) => {
        console.log(data);
        let index = this.cartProducts.findIndex((obj) => {
          return obj._id === cartId;
        });
        this.cartProducts[index].cartPdtQty = cartQty;
        this.cartProducts[index].cartPdtPrice = pdtPrice * cartQty;
        this.cartTotalPrice = 0;
        for (let cartData of this.cartProducts) {
          this.cartTotalPrice += cartData.cartPdtPrice;
        }
      }, error: (error: any) => {
        console.log("Something went wrong "+ error);
      }
    });
  }

  removeCartItems(cartId: number) {
    this.pdtSer.removeCartItems(cartId).subscribe({
      next: (data: string) => {
        console.log(data);
        this.pdtSer.updateCart.next("After remove cart items");
        this.cartProducts = this.cartProducts.filter((obj) => {
          return obj._id != cartId;
        });
        this.cartTotalPrice = 0;
        for (let cartData of this.cartProducts) {
          this.cartTotalPrice += cartData.cartPdtPrice;
        }
      }, error: (error: any) => {
        console.log("Something Went Worng "+ error);
      }
    });
  }
 
}
