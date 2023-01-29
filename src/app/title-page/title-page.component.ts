import { Component,  EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent {
  @Output() public titleToGameEvent = new EventEmitter<boolean>();
  @Output() public playerInfoEvent = new EventEmitter<Player>();
  public Name:string = ''
  public Email:string = ''
  public changecomps:boolean=true;
  constructor(){}
  sendStatus(){
    this.changecomps = !this.changecomps
    this.titleToGameEvent.emit(this.changecomps)
  }
  sendPlayerinfo(){
    this.playerInfoEvent.emit({
      Name: this.Name,
      Email: this.Email
    })
  }
}
export interface Player {//domyślnie narazie tylko to co podajemy, potem dodamy jeszcze do objektu jako opcjonalne czas gry i high score
  Name: string;
  Email: string;
}
