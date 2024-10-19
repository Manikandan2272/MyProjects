import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {

    // Three dot slider

    $('.example1').wmuSlider();

  }

}
