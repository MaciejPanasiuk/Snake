import { Component, ViewChild } from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { PlayerDataService } from '../player-data.service';
import { Player, TotalGameData, GameStatus,playerAction } from '../definitions';
import { Router } from '@angular/router';
import { ControllerComponent } from './controller/controller.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent {
  @ViewChild(NgxSnakeComponent)
  public _snake!: NgxSnakeComponent;
  public Controller!: ControllerComponent;
  public GameStatus: GameStatus = {
    isReady: true,
    isGo: false,
    isPaused: false,
    isGameOver: false,
  };
  public playerInfo: Player = {
    Name: '',
    Email: '',
  };
  public CurrentGameData: TotalGameData = {
    playerName: '',
    // playerName: this.playerInfo.Name,
    pointsEarned: 0,
    timePlayed: 0,
    gamePlayHistory: [],
  };
  public Interval: any;
  constructor(private _router: Router, public _playerData: PlayerDataService) {
    this.DataSubmitCheck();
  }
  ngOnInit(): void {
    this.playerInfo = this._playerData.readData();
    this.CurrentGameData.playerName = this.playerInfo.Name;
  }
  public backToTitle() {
    this._router.navigate(['/TitlePage']);
  }
  public DataSubmitCheck() {
    if (this._playerData.PlayerInfoSubmited() === false) {
      this._router.navigate(['/TitlePage']);
    }
  }

  public PushCurrentData(message: string) {
    this.CurrentGameData.gamePlayHistory.push({
      Time: this.CurrentGameData.timePlayed,
      Action: message,
    });
  }
  public onDataSaved(DataFromController: playerAction) {
    this.CurrentGameData.gamePlayHistory.push(DataFromController);
  }
  public onStatusSaved(StatusFromController: GameStatus) {
    this.GameStatus = StatusFromController;
  }
  public onFoodEaten() {
    this.CurrentGameData.pointsEarned = this.CurrentGameData.pointsEarned + 1;
    this.PushCurrentData('Food Eaten');
  }
  public onGameOver() {
    this.GameStatus.isGameOver = true;
    this.GameStatus.isPaused = false;
    this.GameStatus.isGo = false;
    this.GameStatus.isReady = false;
    this.stopTimer();
    this.PushCurrentData('Game Over');
  }
  public startTimer() {
    this.Interval = setInterval(() => {
      this.CurrentGameData.timePlayed++;
    }, 1000);
  }
  public stopTimer() {
    clearInterval(this.Interval);
  }
}
