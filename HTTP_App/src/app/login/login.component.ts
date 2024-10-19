import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private userSer: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  doLogin(form: NgForm) {
    if (form.valid) {
      this.userSer.regiteredUser.find((user: any) => {
        const regUser = user.username == form.value.username && user.password == form.value.password;
        if (regUser) {
          this.route.navigate(['home']);
          localStorage.setItem("loggedUser", user.username);
        } else {
          this.route.navigate(['register']);
        }
      });
    }
  }

}
