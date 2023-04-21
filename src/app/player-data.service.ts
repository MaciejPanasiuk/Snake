import { Injectable } from '@angular/core';
import { Player } from './definitions';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  private _isDataVerified = false;
  public playerData: Player = {
    //zmienna pustego objektu ts z pobranym interfejsem
    name: '',
    auth_token: '',
    playerAction: {},
  };
  readData() {
    return this.playerData;
  }
  MarkInfoAsSubmited() {
    this._isDataVerified = true;
  }
  PlayerInfoSubmited() {
    return this._isDataVerified;
  }
  constructor() {}
}
