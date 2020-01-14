import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dt',
  pure : false
})
export class DtPipe implements PipeTransform {

  transform(value: string, pos: number): string {
    return value.substr(pos, value.length - 1);
  }
}
