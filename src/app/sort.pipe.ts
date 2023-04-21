import { Pipe, PipeTransform } from '@angular/core';
import { Scores, playerAction } from './definitions';
import { orderBy } from 'lodash';


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: Array<any>, howToSort:string, sortByKey:string): Array<any> {//drugi parametr by obsługiwało wiele różnych obiektów, niestety type any
    if (!value) {
      return value;//zwróci nam najprawdopodobniej pustą tablicę
    }
    if(howToSort==='descending'){
      value.sort((a,b)=>b[sortByKey]-a[sortByKey])
      return value;
    }
    else if(howToSort==='ascending'){
      value.sort((a,b)=>a[sortByKey]-b[sortByKey])
      return value;
    }
    else{return value}
  }

}
