import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  categoriesList: any[] = [];
  selectImg: any;
  msg: any;
  isError = false;

  constructor(public pdtSer: ProductsService) { }

  ngOnInit(): void {
    this.pdtSer.getProducts().subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.categoriesList = data;
      },
      error: (data: any) => {
        console.log(data);
        this.isError = true;
      }
    })
  }

  createProduct(form: NgForm) {

    console.log(form);

    var formData = new FormData();

    formData.append('pdtCatId', form.value.catId);
    formData.append('pdtName', form.value.pdtName);
    formData.append('pdtPrice', form.value.pdtPrice);
    formData.append('pdtDesc', form.value.pdtDesc);
    formData.append('pdtImg', this.selectImg);

    this.pdtSer.addProducts(formData).subscribe({
      next: (data: string) => {
        console.log(data);
        this.msg = data;
        form.reset();
      },
      error: (data: any) => {
        console.log(data);
        this.msg = "Something Went Wrong!!";
      }
    });

  }

  selectedImg(event: any) {
    console.log(event);
    this.selectImg = event.target.files[0];
  }

}
