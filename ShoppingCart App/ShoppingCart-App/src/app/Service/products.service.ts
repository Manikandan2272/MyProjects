import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  updateCart = new Subject();
  cartCount: number;

  constructor(public http: HttpClient) {

  }

  getProducts() {
    return this.http.get<any[]>("http://localhost:3000/getcategories");
  }

  // Manual HTTP Interceptor

  // getMyCartItems() {
  //   return this.http.get<any []>("http://localhost:3000/mycart", {
  //     headers: new HttpHeaders({
  //       'myauthtoken': this.userSer.getToken()
  //     })
  //   });
  // }

  // Automatic HTTP Interseptor

  getMyCartItems() {
    return this.http.get<any[]>("http://localhost:3000/mycart");
  }

  addProducts(data: any) {
    return this.http.post<string>("http://localhost:3000/addproducts", data);
  }

  getAllProducts() {
    return this.http.get<any[]>("http://localhost:3000/listproducts");
  }

  getAllProductsCateWise(catid: number) {
    return this.http.get<any[]>("http://localhost:3000/getpdtcatwise/" + catid);
  }

  addToCartItems(pdtId: number, pdtPrice: number) {
    return this.http.post<string>("http://localhost:3000/addtocart", { cartPdtId: pdtId, cartPdtPrice: pdtPrice });
  }

  getCartCounts() {
    return this.http.get<number>("http://localhost:3000/cartcount");
  }

  updateCartItems(cartId: number, cartQty: number, pdtPrice: number) {
    return this.http.put<string>("http://localhost:3000/updatecart", { cartId, cartPdtQty: cartQty, pdtPrice });
  }

  removeCartItems(cartId: number) {
    return this.http.delete<string>("http://localhost:3000/removecart/" + cartId);
  }

}
