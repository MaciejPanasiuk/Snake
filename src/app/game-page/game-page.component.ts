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

  sendStatus(){
    this.gameToTitleEvent.emit(this.swapToTitle)
  }
  onFoodEaten(){
    this.pointCount=this.pointCount+1
  }
  ClearPoints(){
    this.pointCount=0
  }
  GamePaused(){
    this.isPaused=true;
    this.isGo=false;
    this.isReady=false;
  }
  GameReady(){
    this.isReady=true;
    this.isPaused=false;
    this.isGo=false;
  }
  GameStarted(){
    this.isGo=true;
    this.isPaused=false;
    this.isReady=false;
  }

  constructor(){
    this.playerInfo={
      Name: '',
      Email: ''
    }
    this.playerData=[]
  }
}


