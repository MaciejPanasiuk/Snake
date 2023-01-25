import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {
  @Output() public gameToTitleEvent = new EventEmitter<boolean>();
  public swapToTitle:boolean=true;
  sendStatus(){
    this.gameToTitleEvent.emit(this.swapToTitle)
  }
}
