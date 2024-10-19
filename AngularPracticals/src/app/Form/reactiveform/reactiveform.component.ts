import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  loginForm: FormGroup;

  ngOnInit(): void {
    this.formInstance();
  }

  formInstance(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'useremail': new FormControl('', [Validators.email, Validators.required]),
      'userpassword': new FormControl('', [Validators.pattern('^([1-9][0-9]*)$'), Validators.required])
    });
  }

  doLogin() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

  doReset() {
    this.loginForm.reset();
  }

  get usernameCtrl() {
    return this.loginForm.get('username');
  }

  get useremailCtrl() {
    return this.loginForm.get('useremail');
  }

  get userpasswordCtrl() {
    return this.loginForm.get('userpassword');
  }

}
