import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class TokenInterceptorService implements HttpInterceptor {

  constructor(public userSer: UsersService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    console.log("Working...");
    var tokenReq = req.clone({
      setHeaders: {
        'myauthtoken': this.userSer.getToken() ? this.userSer.getToken() : ''
      }
    })

    return next.handle(tokenReq);
  }

}
