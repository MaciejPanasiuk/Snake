import { Component, Input } from '@angular/core';
import { GameStatus, TotalGameData } from 'src/app/definitions';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
})
export class GameStatusComponent {
  @Input() GameStatus: GameStatus;
  @Input() CurrentGameData: TotalGameData;
  constructor() {
    this.GameStatus = {
      isReady: true,
      isGo: false,
      isPaused: false,
      isGameOver: false,
    };
    this.CurrentGameData = {
      playerName: '',
      pointsEarned: 0,
      timePlayed: 0,
      gamePlayHistory: [],
    };
  }
}
