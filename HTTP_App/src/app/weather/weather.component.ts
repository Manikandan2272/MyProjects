import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {

  city: string = "";
  data: any[] = [];

  constructor(private weatherSer: UserService) { }

  ngOnInit(): void {
    
  }

  doGetWeather() {
    if (this.city != '') {
      this.weatherSer.weatherAPI(this.city).subscribe((res) => {
        console.log(res);
        this.data.splice(0, 1, res);
      });
    }
  }

}
