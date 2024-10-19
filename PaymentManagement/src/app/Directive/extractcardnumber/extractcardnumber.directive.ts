import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appExtractcardnumber]'
})
export class ExtractcardnumberDirective {

  constructor(public cdNumber: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (value.length > 0) {
      value = value.match(new RegExp('.{1,4}', 'g')).join('-'); // Insert dashes every 4 characters
    }
    input.value = value;
  }

}
