import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDataService } from './player-data.service';
import { Player } from './definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    // private _router: Router,
    // private _playerData:PlayerDataService
    ) { }
  title = 'Snake';
  // public playerInfo: Player = {
  //   //zmienna pustego objektu ts z pobranym interfejsem
  //   name: '',
  //   auth_token: '',
  // };
  // public playerData: Array<Player> = [];
  // recievePlayerInfo($event: Player) {
  //   //przypisujemy do obiektu nowe dane z title
  //   this.playerInfo = $event;
  // }
}
