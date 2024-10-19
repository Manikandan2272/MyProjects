import { Component } from '@angular/core';

@Component({
    selector: 'app-listproduct',
    templateUrl: './listproduct.component.html',
    styleUrls: ['./listproduct.component.css']
})

export class ListproductComponent {
    
    productList: string[] = [];
    add = 1;
    // isDisable = false;

    checkList() {
        
        // if (this.productList[0] == undefined) {
        //     this.isDisable = true;
        // }

        this.productList.push(`Product ${this.add++}`);
    }

}