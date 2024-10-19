import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-childcomponent',
    templateUrl: './childcomponent.component.html',
    styleUrls: ['./childcomponent.component.html']
})

export class ChildComponent {

    @Input("sendDataParentToChild") getDataFromParent: string[] = [];

    @Output() myButtonClick = new EventEmitter();

    childToParent(index: number) {
        this.myButtonClick.emit(index);
    }

}