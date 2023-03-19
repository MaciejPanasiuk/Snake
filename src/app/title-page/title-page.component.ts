import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDataService } from '../player-data.service';
import { Player } from '../player-data.service';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss'],
})
export class TitlePageComponent {
  constructor(private _router: Router,
    public _playerData:PlayerDataService) { }
  // @Output() public playerInfoEvent = new EventEmitter<Player>();
  // @Output() public playerDataEvent = new EventEmitter<Array<Player>>();
  public playerInfo: Player = {
    Name: '',
    Email: '',
  };
  // public playerData: Array<Player> = [];
  public isInfoInvalid: boolean = false;

  moveToGame(){
    this.sendPlayerinfo()
    this._playerData.MarkInfoAsSubmited()
    this._router.navigate(['/GamePage']);
  }
  sendPlayerinfo() {
    this._playerData.playerData=this.playerInfo;
    // this.playerInfoEvent.emit({
    //   Name: this.playerInfo.Name,
    //   Email: this.playerInfo.Email,
    // });
  }
  showErrorMessages() {
    this.isInfoInvalid = true;
  }
}