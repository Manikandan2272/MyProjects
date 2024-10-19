import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  regiteredUser: any[] = [
    { username: "manikandan", email: "mani@gmail.com", password: "Mani@1234", phone: "9632587418" }
  ];

  constructor(private http: HttpClient) { }

  weatherAPI(city: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("q", city);
    queryParams = queryParams.append("appid", "3a3eb62e70b9745f96cb7c04245a9cb8");
    return this.http.get<any>("http://api.openweathermap.org/data/2.5/weather", { params: queryParams });
  }

  movieAPI(name: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("t", name);
    queryParams = queryParams.append("apikey", "c429066e");
    return this.http.get<any>("http://www.omdbapi.com/", { params: queryParams });
  }

  

  loggedUser() {
    return !!localStorage.getItem("loggedUser");
  }

}
