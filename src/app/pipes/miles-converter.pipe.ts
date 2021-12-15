import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesConverter'
})
export class MilesConverterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
