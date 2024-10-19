import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Service/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryes: any[] = [];

  constructor(public productSer: ProductsService) {

  }

  ngOnInit(): void {

    this.productSer.getProducts().subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.categoryes = data;
      },
      error: (data: any) => {
        console.log(data);
      }
    })

  }

}
