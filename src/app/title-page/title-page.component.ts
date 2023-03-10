import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss'],
})
export class TitlePageComponent {
  @Output() public titleToGameEvent = new EventEmitter<boolean>();
  @Output() public playerInfoEvent = new EventEmitter<Player>();
  @Output() public playerDataEvent = new EventEmitter<Array<Player>>();
  public playerInfo: Player = {
    //zmienna pustego objektu ts z pobranym interfejsem
    Name: '',
    Email: '',
  };
  public playerData: Array<Player> = [];
  public changeComps: boolean = true;
  public isInfoInvalid: boolean = false;
  constructor() {}
  sendStatus() {
    this.changeComps = !this.changeComps;
    this.titleToGameEvent.emit(this.changeComps);
  }
  sendPlayerinfo() {
    this.playerInfoEvent.emit({
      Name: this.playerInfo.Name,
      Email: this.playerInfo.Email,
    });
  }
  showErrorMessages() {
    this.isInfoInvalid = true;
  }
  // saveData(){
  //   this.playerData.push(this.playerInfo)
  //   this.playerDataEvent.emit(this.playerData)
  // }
  // add(){
  //   this.playerData.push(this.playerInfo)
  // }
}
export interface Player {
  Name: string;
  Email: string;
  playerAction?: object;
}
