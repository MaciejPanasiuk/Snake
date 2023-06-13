import { Component,EventEmitter,Output,Input} from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { playerAction,TotalGameData,GameStatus } from 'src/app/common/definitions';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent {
  @Input() CurrentGameData: TotalGameData;
  @Input() _snake!: NgxSnakeComponent;
  @Input() GameStatus: GameStatus; 
  @Output() public saveGameDataEvent = new EventEmitter<playerAction>();
  @Output() public saveStatusEvent = new EventEmitter<GameStatus>();
  @Output(`startTimer`)  startTimer: EventEmitter<any>=new EventEmitter;
  @Output(`stopTimer`)  stopTimer: EventEmitter<any>=new EventEmitter;
  constructor() {
    this.CurrentGameData= {
      playerName: '',
      pointsEarned: 0,
      timePlayed: 0,
      gamePlayHistory: [],
    }
    this.GameStatus = {
      isReady: true,
      isGo: false,
      isPaused: false,
      isGameOver: false,
    };
  }
  // public Interval: any;
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
    this.saveGameDataEvent.emit({
      Time: this.CurrentGameData.timePlayed,
      Action: message,
    })
  }
  public GamePaused() {
    this.GameStatus.isGameOver = false;
    this.GameStatus.isPaused = true;
    this.GameStatus.isGo = false;
    this.GameStatus.isReady = false;
    this.stopTimer.emit();
    this.saveStatusEvent.emit(this.GameStatus);
  }
  public GameReady() {
    this.GameStatus.isGameOver = false;
    this.GameStatus.isPaused = false;
    this.GameStatus.isGo = false;
    this.GameStatus.isReady = true;
    this.CurrentGameData.pointsEarned = 0;
    this.CurrentGameData.timePlayed = 0;
    this.CurrentGameData.gamePlayHistory = [];
    this.stopTimer.emit();
    this.saveStatusEvent.emit(this.GameStatus);
    // this.saveGameDataEvent.emit(this.CurrentGameData)
  }
  public GameStarted() {
    this.GameStatus.isGameOver = false;
    this.GameStatus.isPaused = false;
    this.GameStatus.isGo = true;
    this.GameStatus.isReady = false;
    this.saveStatusEvent.emit(this.GameStatus);
    this.startTimer.emit();
  }
}
