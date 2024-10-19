import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './Services/user.service';
@Injectable({
  providedIn: "root"
})
export class PermissionsService {
  constructor(private userSer: UserService, private router: Router) { }

  canActivate(): boolean {
    const isLoggedIn = this.userSer.loggedUser();
    if (!isLoggedIn) {
      this.router.navigate(['login']);
    }
    return isLoggedIn;
  }
}

// Use a factory function for the AuthGuard with inject syntax
export const AuthGuard: CanActivateFn = (): boolean => inject(PermissionsService).canActivate();