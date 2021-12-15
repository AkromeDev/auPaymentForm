import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesConverter'
})
export class MilesConverterPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if (!value) {
      return '';
    }

    for (let arg of args) {
      switch(arg) {
        case 'cm':
          return (value * 1.60934 * 1000 * 1000).toFixed(2);
        case 'm':
          return (value * 1.60934 * 1000).toFixed(2);
        case 'km':
          return (value * 1.60934).toFixed(2);
        default: 
        new Error('Target unit not given or not supported');
      }
    };
  }

}
