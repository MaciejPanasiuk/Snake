import { Pipe, PipeTransform } from '@angular/core';
import { playerAction } from './definitions';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: Array<any>,
    filterbyKey:string,
    howToFilter: string
  ): Array<any> {
    if (!value) {
      return value;
    }
    if (howToFilter==='show All') {
      return value;
    }
    
    return value.filter((item) => {
      if (item[filterbyKey] === howToFilter) {
        return true;
      }
      // else if (howToFilter.toLowerCase()==='true') {
      //   return true;
      // else if (typeof item[filterbyKey]==='boolean'&& howToFilter.toLowerCase()==='true') {
      //   return true;
      // }
      return false;
    });
  }
}
