import { Component } from "@angular/core";

@Component({
    selector: 'app-cartitem',
    templateUrl: './cartitem.component.html',
    styleUrls: ['./cartitem.component.css']
})

export class CartitemComponent {

    value = 0;
    minimumValue = "";
    maximumValue = "";

    addButton = false;
    removeButton = false;

    constructor() {
        this.removeButton = true;
    }

    cartValue(button: any) {

        if (button == 'add' && this.value < 10) {
            this.value++;
            this.removeButton = false;
            if (this.value == 10) {
                this.addButton = true;
                this.maximumValue = "You have reached Maximum cart count";
            }
        } else if (button == 'remove' && this.value > 0) {
            this.value--;
            this.addButton = false;
            if (this.value == 0) {
                this.removeButton = true;
                this.minimumValue = "You have reached Minimum cart count";
            }
        }
    }

}