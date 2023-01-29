import { Component,EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Player } from 'c:/Frontend/Angular/Snake/src/app/title-page/title-page.component';
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {
  
  @Input() playerInfo:Player;
  @Output() public gameToTitleEvent = new EventEmitter<boolean>();
  public swapToTitle:boolean=true;
  // public Name:string=''
  // public Email:string=''
  sendStatus(){
    this.gameToTitleEvent.emit(this.swapToTitle)
  }
  constructor(){
    this.playerInfo={
      Name: '',
      Email: ''
    }
  }
  // public playerInfo:Player={
  //   Name: '',
  //   Email: ''
  // }

}
