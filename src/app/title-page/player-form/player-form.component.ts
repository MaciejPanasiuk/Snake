import { Component } from '@angular/core';
import { Authentication, Player } from 'src/app/definitions';
import { Router } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';
import { GamesServerService } from 'src/app/games-server.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent {
  constructor(
    private _router: Router,
    public _playerData: PlayerDataService,
    private _highScores: GamesServerService
  ) {}
  public playerInfo: Player = {
    name: '',
    auth_token: '',
  };
  public isInfoInvalid: boolean = false;
  public isTokenInvalid: boolean = false;
  public isTokenSubmited: boolean = false;
  public token: Authentication = { 'auth-token': '' };
  moveToGame() {
    this._playerData.savePlayerData(this.playerInfo)
    this.isTokenSubmited = true;
    this.CheckTokenAuth();
  }
  CheckTokenAuth() {
    this._highScores.authToken().subscribe({
      next: (data) => {
        if (data.success) {
          console.log('entry authorized', data);
          this.isTokenInvalid = true;
          this._highScores.MarkTokenAsValid();
          this._playerData.MarkInfoAsSubmited();
          this._router.navigate(['/GamePage']);
        } else {
          this.showErrorMessages();
        }
      },
      error: (err) => console.log('authentication failed', err),
    });
  }
  showErrorMessages() {
    this.isInfoInvalid = true;
  }
}
