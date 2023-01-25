import { Component,  EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent {
  @Output() public titleToGameEvent = new EventEmitter<boolean>();
  public playerName:string = ''
  public email:string = ''
  public changecomps:boolean=true;
  // public swapComps() {
  //   if (this.changecomps) {
  //     this.changecomps=!this.changecomps;
  //   }
  // }
  // public isButtonVisible:boolean = true;
  // public enableButton: boolean = false
  constructor(){}
  sendStatus(){
    this.changecomps = !this.changecomps
    this.titleToGameEvent.emit(this.changecomps)
  }
}
