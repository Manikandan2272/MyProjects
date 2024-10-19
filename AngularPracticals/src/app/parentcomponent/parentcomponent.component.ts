import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-parentcomponent',
    templateUrl: './parentcomponent.component.html',
    styleUrls: ['./parentcomponent.component.html']
})

export class ParentComponent implements OnInit {

    activeProducts = ["HP", "Dell", "Acer", "Lenovo"];

    inactiveProducts = ["Samsung", "LG", "Sony", "MacBook"];

    // Original Array Values

    ngOnInit(): void {
        console.log(this.activeProducts);
        console.log(this.inactiveProducts);
    }

    // Send Data Parent to Child

    parentToChild(index: number) {
        this.inactiveProducts.push(this.activeProducts[index]);
        this.activeProducts.splice(index, 1);
    }

    // Send Data Child to Parent

    childToParent(index: number) {
        this.activeProducts.push(this.inactiveProducts[index]);
        this.inactiveProducts.splice(index, 1);
    }

}