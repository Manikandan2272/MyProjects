import { Component } from "@angular/core";

@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
    styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent{

    products = ["Product","Product","Product","Product"];
    toDisplay = false;

    addProducts(){

        this.products.push("product")
        this.toDisplay = !this.toDisplay;

    }

}