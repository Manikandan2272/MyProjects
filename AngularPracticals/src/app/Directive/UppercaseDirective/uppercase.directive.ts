import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(public upperCase: ElementRef) { }

  @HostListener('keyup') onMyKeyUp() {
    let inputValue: string = this.upperCase.nativeElement.value;
    this.upperCase.nativeElement.value = inputValue.toUpperCase();
  }

}