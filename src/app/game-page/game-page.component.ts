import { Component,EventEmitter, OnInit, Output, Input, ViewChild,AfterViewInit } from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { Player } from 'c:/Frontend/Angular/Snake/src/app/title-page/title-page.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {
  
  @Input() playerInfo:Player;
  @Input() playerData:Array<Player>;
  @Output() public gameToTitleEvent = new EventEmitter<boolean>();
  public swapToTitle:boolean=true;
  public pointCount:number=0
  public isReady:boolean = true;
  public isGo:boolean = false;
  public isPaused:boolean = false;
  public isGameOver:boolean = false;
  public gameplayTime:number = 0;
  public Interval:any;
  sendStatus(){
    this.gameToTitleEvent.emit(this.swapToTitle)
  }
  onFoodEaten(){
    this.pointCount=this.pointCount+1
  }
  onGameOver(){
    this.isGameOver=true;
    this.isPaused=false;
    this.isGo=false;
    this.isReady=false;
    this.stopTimer();

  }
  // ClearPointsAndTimer(){
  //   this.pointCount=0
  // }
  GamePaused(){
    this.isGameOver=false;
    this.isPaused=true;
    this.isGo=false;
    this.isReady=false;
    this.stopTimer();
  }
  GameReady(){
    this.isGameOver=false;
    this.isPaused=false;
    this.isGo=false;
    this.isReady=true;
    this.pointCount=0
    this.gameplayTime=0
  }
  GameStarted(){
    this.isGameOver=false;
    this.isPaused=false;
    this.isGo=true;
    this.isReady=false;
    this.startTimer();
  }
  // GameLost(){
  //   this.isGo=true;
  //   this.isPaused=false;
  //   this.isReady=false;
  //   this.stopTimer();
  // }
  startTimer(){
    this.Interval = setInterval(() => {
      this.gameplayTime++;
      }, 1000);
  }
  stopTimer(){
    clearInterval(this.Interval);
    }
  constructor(){
    this.playerInfo={
      Name: '',
      Email: ''
    }
    this.playerData=[]
  }
}


