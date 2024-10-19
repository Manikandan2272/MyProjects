import { Component } from "@angular/core";

@Component({
    selector: 'app-addcart',
    templateUrl: './addcart.component.html',
    styleUrls: ['./addcart.component.css']
})

export class AddcartComponent {

    value = 0;
    button: any = [
        { label: "Add to Cart", type: "button" },
        { label: "Remove from Cart", type: "button" }
    ];

    constructor() {
        for (let i = 0; i < this.button.length; i++) {
            console.log(this.button[i]);
        }
    }

    // cartValues(value: any) {
    //     if (value == 'add' && this.value < 10) {
    //         this.value++;
    //     } else if (value == 'remove' && this.value > 0) {
    //         this.value--;
    //     }
    // }

    cartValues(btn: any) {
        if (btn.label == "Add to Cart") {
            if (this.value < 10) {
                this.value++;
            }
        } else if (btn.label == "Remove from Cart") {
            if (this.value > 0) {
                this.value--;
            }
        }
    }
}