import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    switch (value) {
      case   1:
        return 'Half Hour';
      case   2:
        return 'One Hour';
      case   3:
        return 'Half Day';
      case   4:
        return 'Ful Day';
      default:
        return value.toString();
    }
  }

}
