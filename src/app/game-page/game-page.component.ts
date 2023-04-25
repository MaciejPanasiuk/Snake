import { Component, ViewChild } from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { PlayerDataService } from '../player-data.service';
import {
  Player,
  TotalGameData,
  GameStatus,
  playerAction,
  Scores,
} from '../definitions';
import { Router } from '@angular/router';
import { ControllerComponent } from './controller/controller.component';
import { GamesServerService } from '../games-server.service';

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
    name: '',
    auth_token: '',
  };
  public CurrentGameData: TotalGameData = {
    playerName: '',
    pointsEarned: 0,
    timePlayed: 0,
    gamePlayHistory: [],
  };
  public highScores: Array<Scores> = [];
  public Interval: any;
  public IntervalId: any;
  constructor(
    private _router: Router,
    private _playerData: PlayerDataService,
    private _highScores: GamesServerService
  ) {
    this.DataSubmitCheck();
    this.loadScoresData();
  }
  ngOnInit(): void {
    this.highScores = this._highScores.highScores;
    this.playerInfo = this._playerData.readData();
    this.CurrentGameData.playerName = this.playerInfo.name;
    this.IntervalId = setInterval(() => this.loadScoresData(), 30000);
  }
  ngOnDestroy() {
    clearInterval(this.IntervalId);
  }
  public backToTitle() {
    this._router.navigate(['/TitlePage']);
  }
  public DataSubmitCheck() {
    if (this._playerData.PlayerInfoSubmited() === false) {
      this._router.navigate(['/TitlePage']);
    }
  }
  public loadScoresData() {
    this._highScores.loadScores().subscribe({
      next: (data) => {
        this.highScores = [...data];
        this._highScores.SaveHighScoreData(this.highScores)
        console.log('we got our data from http!', data);
      },
      error: (err) => {
        console.log('we got an error, maybe no token', err);
      },
    });
  }
  PushScore() {
    this._highScores.postScore().subscribe({
      next: (data) => {
        console.log('entry sent succesfully', data);
      },
      error: (err) => console.log('OH NO', err),
    });
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
    this._highScores.sendMyScoreToService({
      name: this._playerData.playerData.name,
      game: 'snake',
      score: this.CurrentGameData.pointsEarned,
    })
    this.PushScore();
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
