import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padZero',
})
export class PadZeroPipe implements PipeTransform {

  transform(value: number, length: number = 2): string {
    return value.toString().padStart(length, '0');
  }

}
