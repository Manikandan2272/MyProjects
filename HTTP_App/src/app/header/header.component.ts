import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, public userSer:UserService) { }

  ngOnInit(): void {

  }

  doLogout() {
    localStorage.clear();
    this.route.navigate(['login']);
  }

}
