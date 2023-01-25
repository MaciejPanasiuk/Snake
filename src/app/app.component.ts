import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Snake';
  public swapToGame:boolean=true;
  public swapComps() {
    if (this.swapToGame) {
      this.swapToGame=!this.swapToGame;
    }
  }
  public isButtonVisible:boolean = true;
}

