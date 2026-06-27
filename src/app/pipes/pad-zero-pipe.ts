import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padZero',
})

export class PadZeroPipe implements PipeTransform {
  transform(value: number | string | null | undefined, length: number = 2): string {
    if (value === null || value === undefined) {
      return ''; // or return '00' depending on your desired fallback
    }

    const str = value.toString();
    return str.padStart(length, '0');
  }
}