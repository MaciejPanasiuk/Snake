import { Component, EventEmitter, Output } from '@angular/core';
import { Player } from 'src/app/definitions';
import { Router } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent {
  constructor(private _router: Router, public _playerData: PlayerDataService) {}
  // @Output() public playerInfoEvent = new EventEmitter<Player>();
  // @Output() public playerDataEvent = new EventEmitter<Array<Player>>();
  public playerInfo: Player = {
    Name: '',
    Email: '',
  };
  // public playerData: Array<Player> = [];
  public isInfoInvalid: boolean = false;

  moveToGame() {
    this.sendPlayerinfo();
    this._playerData.MarkInfoAsSubmited();
    this._router.navigate(['/GamePage']);
  }
  sendPlayerinfo() {
    this._playerData.playerData = this.playerInfo;
  }

  showErrorMessages() {
    this.isInfoInvalid = true;
  }
}
