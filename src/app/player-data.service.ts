import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  private _isDataVerified = false;
  public playerData: Player = {
    //zmienna pustego objektu ts z pobranym interfejsem
    Name: '',
    Email: '',
    playerAction:{}
  };
  readData () {
    return this.playerData;
}
MarkInfoAsSubmited(){
  this._isDataVerified = true;
}
PlayerInfoSubmited () {
  return this._isDataVerified;
}
  constructor() { }
}
export interface Player {
  Name: string;
  Email: string;
  playerAction?: object;
}