import { Injectable } from "@angular/core";
import { CanActivate, Router, } from "@angular/router";
import { UsersService } from "./Service/users.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(public userSer: UsersService, private router: Router) { }

  canActivate(): boolean {
    if (!this.userSer.doLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
    return this.userSer.doLoggedIn();
  }

}