import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesConverter'
})
export class MilesConverterPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (!value) {
      return '';
    }
    return (value * 1.60934).toFixed(2);
  }

}
