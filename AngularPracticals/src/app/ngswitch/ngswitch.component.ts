import { Component } from "@angular/core";

@Component({
    selector:'app-ngswitch',
    templateUrl: './ngswitch.component.html',
    styleUrls: ['./ngswitch.component.css']
})

export class NgswitchComponent{

    viweMode = "personal";

    changeBtn(viweMode: string){
        this.viweMode = viweMode;
    }

}