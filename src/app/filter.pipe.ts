import { Pipe, PipeTransform } from '@angular/core';
import { playerAction } from './definitions';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: Array<playerAction>,
    howToFilter: string
  ): Array<playerAction> {
    if (!value) {
      return value;
    }
    if (howToFilter==='show All') {
      return value;
    }
    
    return value.filter((item) => {
      if (item.Action === howToFilter) {
        return true;
      }
      return false;
    });
  }
}
