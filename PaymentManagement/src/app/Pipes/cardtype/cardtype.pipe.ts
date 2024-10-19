import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardtype'
})
export class CardtypePipe implements PipeTransform {

  transform(cardType: string, cardNumber: string): string {
    if (cardNumber && cardNumber.length >= 2) {
        const firstTwoDigits = Number(cardNumber.slice(0, 2));
        if (firstTwoDigits < 15) {
            return "fa fa-brands fa-cc-mastercard fs-5";
        } else {
            return "fa fa-brands fa-cc-visa fs-5";
        }
    }
    // Default case or handle appropriately if cardNumber is not valid
    return cardType;
}

}
