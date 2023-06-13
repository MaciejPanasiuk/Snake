import { Component,Input } from '@angular/core';
import { TotalGameData } from 'src/app/common/definitions';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss','../game-page.component.scss']
})
export class GameInfoComponent {
    @Input() CurrentGameData: TotalGameData;
    @Input() public palette:String=''
    constructor() {
      this.CurrentGameData= {
        playerName: '',
        pointsEarned: 0,
        timePlayed: 0,
        gamePlayHistory: [],
      }
    }
    public statsStatus() {
      this.showStats = !this.showStats;
    }
    public showStats: boolean = false;
    public howToSort: string = 'ascending';
    public howToFilter: string = 'show All';
    public allActionFilters: Array<string> = [
      'action Start',
      'action Stop',
      'action Reset',
      'action Up',
      'action Left',
      'action Right',
      'action Down',
      'Food Eaten',
      'Game Over',
    ];
}
