import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-listprouducts',
  templateUrl: './listprouducts.component.html',
  styleUrls: ['./listprouducts.component.css']
})
export class ListprouductsComponent implements OnInit {

  products: any[] = [];
  isLoading = true;

  constructor(private pdtSer: ProductsService, private routeActivate: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("List Pdt Initiated");
    this.routeActivate.params.subscribe({
      next: (param: Params) => {
        console.log(param);
        if (param["catid"]) {
          this.getProductsCategoryWise(param["catid"]);
        } else {
          this.getProductLists();
        }
      }
    })
  }

  getProductsCategoryWise(catId: string) {
    this.isLoading = true;
    const catid = Number(catId);
    this.pdtSer.getAllProductsCateWise(catid).subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.isLoading = false;
        this.products = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  getProductLists() {
    this.pdtSer.getAllProducts().subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.isLoading = false;
        this.products = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  addToCartItems(pdtId: number, pdtPrice: number) {
    this.pdtSer.addToCartItems(pdtId, pdtPrice).subscribe({
      next: (data: string) => {
        console.log(data);
        this.pdtSer.updateCart.next(data);
      }, error: (error: any) => {
        console.log(error);
      }
    });
  }

}
