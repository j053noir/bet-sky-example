import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(values: Array<any>, args?: any): any {
    if (!values || !args) {
      return values;
    }

    return values.filter(a => {
      return a[args.property].toLowerCase().indexOf(args.value.toLowerCase()) !== -1;
    });
  }
}
