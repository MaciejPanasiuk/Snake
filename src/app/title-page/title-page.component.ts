import { Component,  EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent {
  @Output() public formChange = new EventEmitter<string>();
  public playerName:string = ''
  public email:string = ''
  public enableButton: boolean = false
}
