import { Component } from '@angular/core';
import { Player } from './title-page/title-page.component';// musi pobrać interfejs z childa by odpowiednio odebrac dane
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Snake';
public changecomps: boolean = true
public playerInfo:Player={//zmienna pustego objektu ts z pobranym interfejsem
  Name: '',
  Email: ''
}
recieveStatus($event:any){
  this.changecomps=$event;
}
recievePlayerInfo($event:Player){//przypisujemy do obiektu nowe dane z title
  this.playerInfo.Name=$event.Name;
  this.playerInfo.Email=$event.Email;
}
}

