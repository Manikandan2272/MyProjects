import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  ngOnInit(): void {

    // Stats - Number - Scroller - Animation - JavaScript

    jQuery(document).ready(function ($: any) {
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
    });

  }

}
