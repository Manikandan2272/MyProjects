import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsersService } from '../Service/users.service';
import { Router } from '@angular/router';
import { ProductsService } from '../Service/products.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  msg: any;

  constructor(private usersSer: UsersService, private router: Router, private pdtSer: ProductsService) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'Username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'Password': new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    $('.toggle').click(() => {
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");
    });

  }

  // Reactive Form with User Login

  doLogin() {

    this.usersSer.doUserLogin(this.loginForm.value).subscribe({
      next: (data: string) => {
        if (data.length === 0) {
          this.msg = "Invalid Username and Password";
          this.loginForm.reset();
        } else if (data.length > 0) {
          localStorage.setItem("loggedUser", data);
          this.pdtSer.updateCart.next("After Login Get Cart Count");
          this.router.navigateByUrl("/");
        }
      },
      error: (error: any) => {
        console.log(error);
      }
    });

  }

  get usernameCtrl() {
    return this.loginForm.get('Username');
  }

  get userpasswordCtrl() {
    return this.loginForm.get('Password');
  }

  // Template Driven Form with User Sign In

  doRegister(formData: NgForm) {

    this.usersSer.doUserRegister(formData.value).subscribe({
      next: (data: string) => {
        console.log(data);
        this.msg = data;
        formData.reset();
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log("Completed");
      }
    });

  }

}