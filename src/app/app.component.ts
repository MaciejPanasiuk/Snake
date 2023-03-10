import { Component } from '@angular/core';
import { Player } from './title-page/title-page.component'; // musi pobrać interfejs z childa by odpowiednio odebrac dane
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Snake';
  public changeComps: boolean = true;
  public playerInfo: Player = {
    //zmienna pustego objektu ts z pobranym interfejsem
    Name: '',
    Email: '',
  };
  public playerData: Array<Player> = [];
  recieveStatus($event: any) {
    this.changeComps = $event;
  }
  recievePlayerInfo($event: Player) {
    //przypisujemy do obiektu nowe dane z title
    this.playerInfo = $event;
  }
  AddPlayerData($event: Player) {
    this.playerData.push($event);
  }
}
