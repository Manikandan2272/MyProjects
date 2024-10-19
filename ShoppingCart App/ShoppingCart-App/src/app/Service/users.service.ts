import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  doUserLogin(data: any) {
    return this.http.post<string>("http://localhost:3000/login", data);
  }

  doUserRegister(data: any) {
    return this.http.post<string>("http://localhost:3000/register", data)
  }

  doLoggedIn() {
    return !!localStorage.getItem("loggedUser");
  }

  getToken() {
    return localStorage.getItem("loggedUser");
  }

}
