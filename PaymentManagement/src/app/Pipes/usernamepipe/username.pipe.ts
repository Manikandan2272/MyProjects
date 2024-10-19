import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) { // Handle empty strings or null/undefined
      return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
