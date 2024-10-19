import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidecardnumber'
})
export class HidecardnumberPipe implements PipeTransform {

  transform(value: number): string {
    return '**** **** **** ' + value.toString().slice(-4);
  }


}

