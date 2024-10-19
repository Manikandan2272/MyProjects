import { Component } from "@angular/core";

@Component({
    selector: 'app-greetuser',
    templateUrl: './greetuser.component.html',
    styleUrls: ['./greetuser.component.css']
})

export class GreetuserComponent {

    inputValue = '';
    username = '';
    buttons:any = [
        {label:'Greet'},
        {label:'Clear'}
    ];

    clearButton = false;

    constructor() {
        this.clearButton = true;
    }

    greetUserName(button: any) {
        if (button == 'greet') {
            this.username = `Welcome ${this.inputValue}`;
            this.clearButton = false;
        } else if (button == 'clear') {
            this.inputValue = '';
            this.clearButton = true;
        }
    }

    doClickEvent(btn:any) {
        if (btn.label == 'Greet') {
            this.username = `Welcome ${this.inputValue}`;
            this.clearButton = false;
        } else if (btn.label == 'Clear') {
            this.inputValue = '';
            this.clearButton = true;
        }
    }

} 