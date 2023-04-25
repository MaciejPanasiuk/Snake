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
