import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from './definitions';

@Pipe({
  name: 'onlyXBest'
})
export class OnlyXBestPipe implements PipeTransform {

  transform(value: Array<Scores>, ScoresToShow:number): Array<Scores>{
    if(value.length<=ScoresToShow)
    {return value;}
    else{
      let ValueCopy=[...value];
      let result=ValueCopy.sort((a,b)=>b.score-a.score).splice(0,ScoresToShow);
      return result;
    }
  }

}
// export class FilterPipe implements PipeTransform {
//   transform(
//     value: Array<playerAction>,
//     howToFilter: string
//   ): Array<playerAction> {
//     if (!value) {
//       return value;
//     }
//     if (howToFilter==='show All') {
//       return value;
//     }
    
//     return value.filter((item) => {
//       if (item.Action === howToFilter) {
//         return true;
//       }
//       return false;
//     });
//   }
// }
