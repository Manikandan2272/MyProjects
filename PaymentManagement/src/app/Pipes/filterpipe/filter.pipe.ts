import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: any[], searchBy: string, searchText: string): any[] {

    if (value.length === 0 || searchText.length === 0) {
      return value;
    }

    const tempArray: any[] = [];

    for (let i = 0; i < value.length; i++) {
      // SearchBy Username
      if (searchBy === "username") {
        if (value[i].username.toLowerCase().includes(searchText.toLowerCase())) {
          tempArray.push(value[i]);
        }
      }
      // SearchBy Price Value
      else if (searchBy === "price") {
        if (value[i].price.toString() === searchText) {
          tempArray.push(value[i]);
        }
      }
      // SearchBy Card Number
      else if (searchBy === "cardnumber") {
        if (value[i].cardNumber.toString().includes(searchText)) {
          tempArray.push(value[i]);
        }
      }
    }
    return tempArray;
  }

}
