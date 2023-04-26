import { Component } from '@angular/core';
import { Authentication, Player } from 'src/app/definitions';
import { Router } from '@angular/router';
import { PlayerDataService } from 'src/app/player-data.service';
import { GamesServerService } from 'src/app/games-server.service';
import { FormBuilder, Validators, } from '@angular/forms';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent {
  constructor(
    private _router: Router,
    public _playerData: PlayerDataService,
    private _highScores: GamesServerService,
    public _fb: FormBuilder,
  ) {}
  ngOnInit(): void {
      this.CheckLocalStorage()
  }
  public playerForm=this._fb.group({
    name: ['',[
      Validators.required,
      Validators.minLength(5)
    ]],
    auth_token: ['',[
      Validators.required,
      Validators.minLength(4)
    ]]
  })
  // public playerInfo: Player = {
  //   name: '',
  //   auth_token: '',
  // };
  public isInfoValid: boolean = true;
  public isTokenValid: boolean =true;
  public isTokenSubmited: boolean = false;
  public token: Authentication = { 'auth-token': '' };
  public authTokenErrorMessage: string='your student ID must be at least 4 characters long'
  // moveToGame() {
  //   this._playerData.savePlayerData(this.playerInfo)
  //   this.isTokenSubmited = true;
  //   this.CheckTokenAuth();
  // }
  moveToGame() {
    this._playerData.savePlayerData({name:this.playerForm.value.name!,auth_token:this.playerForm.value.auth_token!})
    this.isTokenSubmited = true;
    this.CheckTokenAuth();
  }
  CheckTokenAuth() {
    this._highScores.authToken().subscribe({
      next: (data) => {
        if (data.success) {
          console.log('entry authorized', data);
          this.isTokenValid = true;
          this._highScores.MarkTokenAsValid();
          this._playerData.MarkInfoAsSubmited();
          this._router.navigate(['/GamePage']);
        } else {
          this.showErrorMessages();
          console.log('auth failed', data);
          this.isTokenValid = false;
        }
      },
      error: (err) => {console.log('authentication failed', err);
      this.isTokenValid = false;},
      
    });
  }
  CheckLocalStorage(){
    if(localStorage.getItem('playerName')){
      this.playerForm.setValue({
        name:`${localStorage.getItem('playerName')}`,
        auth_token:''
      },{emitEvent: false})
    }
  }
  showErrorMessages() {
    this.isInfoValid = false;
  }
  onSubmit(){
    if(this.playerForm.valid)
    {
      localStorage.setItem('playerName',`${this.playerForm.value.name}`)
      this.moveToGame()
    }
    else{
      this.showErrorMessages()
    }
  }
}
