import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ig-grid',
  templateUrl: './ig-grid.component.html',
  styleUrls: ['./ig-grid.component.css']
})
export class IgGridComponent implements OnInit {

  userData: any[] = [
    { "id": 1, "name": "user 1", "isActive": true },
    { "id": 2, "name": "user 2", "isActive": true },
    { "id": 3, "name": "user 3", "isActive": false },
    { "id": 4, "name": "user 4", "isActive": true }
  ];

  constructor(private datePipe: DatePipe) {

  }

  ngOnInit(): void {
   
  }

  doSubmit(form: NgForm) {
    if (form.valid) {
      let body = { "id": this.userData.length + 1, ...form.value, "isActive": true };
      this.userData.push(body);
      console.log(body);
      form.reset();
    } else if (form.invalid) {
      form.control.markAllAsTouched();
    }
  }

  doEditAndDelete(item: any, btn: any) {
    if (btn == 'edit') {
      console.log(item);
    } else if (btn == 'delete') {
      item.isActive = false;
    }
  }

}