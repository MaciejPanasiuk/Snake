import { Injectable } from '@angular/core';
import { Player } from './definitions';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  public _isDataSubmited = false;
  public playerData: Player = {
    //zmienna pustego objektu ts z pobranym interfejsem
    name: '',
    auth_token: '',
    playerAction: {},
  };
  readData() {
    return this.playerData;
  }
  readstatus(){
    return this._isDataSubmited;
  }
  MarkInfoAsSubmited() {
    this._isDataSubmited = true;
  }
  PlayerInfoSubmited() {
    return this._isDataSubmited;
  }
  savePlayerData(data:Player){
    this.playerData=data;
  }
  clearPlayerData(){
    this.playerData={
      name: '',
      auth_token: '',
      playerAction: {},
    };
    // this._isDataSubmited = false;
  }
  isplayerInfoSubmited(){
    if(this.playerData.name!==''&& this.playerData.auth_token!=='')
    {return true;}
    else{
      return false
    }

  }
  constructor() {}
}
