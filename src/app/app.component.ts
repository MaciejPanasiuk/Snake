import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Snake';
public changecomps: boolean = true

recieveStatus($event:any){
  this.changecomps=$event;
}
}

