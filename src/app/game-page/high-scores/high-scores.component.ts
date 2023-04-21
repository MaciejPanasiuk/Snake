import { Component, Input } from '@angular/core';
import { Player, Scores } from 'src/app/definitions';
@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.scss']
})
export class HighScoresComponent {
  @Input() public highScores: Array<Scores> = [];
  @Input() public playerInfo: Player = {
    name: '',
    auth_token: '',
  };
  constructor(
  ) {
  }
  ngOnInit(): void {
    this.ScoresToDisplay=this.highScores;
  }
  public ScoresToDisplay:Array<Scores>=[]
  public showScores:boolean=false;
  public showHighScores: boolean = false
  public showMyScores: boolean = false;
  public howToSort: string = '';
  handleShowHighScores(){
    this.showHighScores=!this.showHighScores;
    this.showMyScores=false;
  }
  handleShowMycores(){
    this.showMyScores=!this.showMyScores;
    this.showHighScores=false;
  }
  handleShowScores(){
    this.showScores=!this.showScores;
    this.showHighScores=true;
    this.showMyScores=false;
  }
// showOnlyXBest(scoreArr:Array<Scores>,ScoresNum:number){
// return scoreArr.sort((a,b)=>b.score-a.score).splice(ScoresNum,scoreArr.length-10)
// }
}
