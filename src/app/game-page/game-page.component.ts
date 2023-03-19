import {
  Component,
  EventEmitter,
  Output,
  Input,
  ViewChild,
} from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { Player, PlayerDataService } from '../player-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent {
  // @Input() playerInfo: Player;
  // @Input() playerData: Array<Player>;
  // @Output() public gameToTitleEvent = new EventEmitter<boolean>();
  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;
  // public swapToTitle: boolean = true;
  public isReady: boolean = true;
  public isGo: boolean = false;
  public isPaused: boolean = false;
  public isGameOver: boolean = false;
  public playerInfo:Player = {
    Name: '',
    Email: '',}
  constructor(private _router: Router,
    public _playerData: PlayerDataService) {
    // this.playerData = [];
    this.DataSubmitCheck()
    // this.playerInfo = this._playerData.readData ();
  }
  ngOnInit(): void {
    this.playerInfo = this._playerData.readData ();
  }
  public pointCount: number = 0;
  public gameplayTime: number = 0;
  public Interval: any;
  public howToSort: string = '';
  public showStats: boolean = false;
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
  public howToFilter: string = 'show All';
  public gamePlayHistory: Array<playerAction> = [];
  public savedCurrentGameData: TotalGameData = {
    playerName: '',
    pointsEarned: 0,
    timePlayed: 0,
    gamePlayHistory: [],
  };
    public backToTitle() {
    this._router.navigate(['/TitlePage']);}
    public DataSubmitCheck() {
      if (this._playerData.PlayerInfoSubmited () === false) {
        this._router.navigate(['/TitlePage'])
      }
    }
  

  public onStartButtonPressed() {
    this._snake.actionStart();
    this.PushCurrentData('action Start');
    this.GameStarted();
  }
  public onStopButtonPressed() {
    this._snake.actionStop();
    this.PushCurrentData('action Stop');
    this.GamePaused();
  }
  public onResetButtonPressed() {
    this._snake.actionReset();
    this.PushCurrentData('action Reset');
    this.saveCurrentGamePlay();
    this.GameReady();
  }
  public onUpButtonPressed() {
    this._snake.actionUp();
    this.PushCurrentData('action Up');
  }
  public onLeftButtonPressed() {
    this._snake.actionLeft();
    this.PushCurrentData('action Left');
  }
  public onRightButtonPressed() {
    this._snake.actionRight();
    this.PushCurrentData('action Right');
  }
  public onDownButtonPressed() {
    this._snake.actionDown();
    this.PushCurrentData('action Down');
  }
  public PushCurrentData(message: string) {
    this.gamePlayHistory.push({
      Time: this.gameplayTime,
      Action: message,
    });
  }
  public saveCurrentGamePlay() {
    this.savedCurrentGameData = {
      playerName: this.playerInfo.Name,
      pointsEarned: this.pointCount,
      timePlayed: this.gameplayTime,
      gamePlayHistory: this.gamePlayHistory,
    };
    this.gamePlayHistory = [];
  }
  // public sendStatus() {
  //   this.gameToTitleEvent.emit(this.swapToTitle);
  // }
  public onFoodEaten() {
    this.pointCount = this.pointCount + 1;
    this.PushCurrentData('Food Eaten');
  }
  public onGameOver() {
    this.isGameOver = true;
    this.isPaused = false;
    this.isGo = false;
    this.isReady = false;
    this.stopTimer();
    this.PushCurrentData('Game Over');
  }
  public GamePaused() {
    this.isGameOver = false;
    this.isPaused = true;
    this.isGo = false;
    this.isReady = false;
    this.stopTimer();
  }
  public GameReady() {
    this.isGameOver = false;
    this.isPaused = false;
    this.isGo = false;
    this.isReady = true;
    this.pointCount = 0;
    this.gameplayTime = 0;
    this.stopTimer();
  }
  public GameStarted() {
    this.isGameOver = false;
    this.isPaused = false;
    this.isGo = true;
    this.isReady = false;
    this.startTimer();
  }
  private startTimer() {
    this.Interval = setInterval(() => {
      this.gameplayTime++;
    }, 1000);
  }
  private stopTimer() {
    clearInterval(this.Interval);
  }
  public statsStatus() {
    this.showStats = !this.showStats;
  }
}
export interface playerAction {
  Time: number;
  Action: string;
}
export interface TotalGameData {
  playerName: string;
  pointsEarned: number;
  timePlayed: number;
  gamePlayHistory: Array<playerAction>;
}
