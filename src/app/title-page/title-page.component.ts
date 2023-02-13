import { Component,  EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent {
  @Output() public titleToGameEvent = new EventEmitter<boolean>();
  @Output() public playerInfoEvent = new EventEmitter<Player>();
  @Output() public playerDataEvent = new EventEmitter<Array<Player>>();
  public playerInfo:Player={//zmienna pustego objektu ts z pobranym interfejsem
    Name: '',
    Email: ''
  }
  public playerData:Array<Player>=[]
  public changecomps:boolean=true;
  constructor(){}
  sendStatus(){
    this.changecomps = !this.changecomps
    this.titleToGameEvent.emit(this.changecomps)
  }
  sendPlayerinfo(){
    this.playerInfoEvent.emit({
      Name: this.playerInfo.Name,
      Email: this.playerInfo.Email
    })
  }
  // saveData(){
  //   this.playerData.push(this.playerInfo)
  //   this.playerDataEvent.emit(this.playerData)
  // }
  // add(){
  //   this.playerData.push(this.playerInfo)
  // }
}
export interface Player {//domyślnie narazie tylko to co podajemy, potem dodamy jeszcze do objektu jako opcjonalne czas gry i high score
  Name: string;
  Email: string;
  playerAction?: object
}
