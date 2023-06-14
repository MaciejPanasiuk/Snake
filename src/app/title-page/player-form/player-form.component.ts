import { Component } from '@angular/core';
import { Authentication} from 'src/app/common/definitions';
import { Router } from '@angular/router';
import { PlayerDataService } from 'src/app/services/player-data/player-data.service';
import { GamesServerService } from 'src/app/services/games-server/games-server.service';
import { FormBuilder, Validators, } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
      this._playerData.clearPlayerData();
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
    ]],
    paletteSelected:['normal_colors',[]]
  })
  public isInfoValid: boolean = true;
  public isTokenValid: boolean =true;
  public isTokenSubmited: boolean = false;
  public token: Authentication = { 'auth-token': '' };
  public authTokenErrorMessage: string='your student ID must be at least 4 characters long'

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
          localStorage.setItem('isInfoSubmitted',`true`)
          // localStorage.setItem('isInfoSubmitted',`${this._playerData._isDataSubmited}`)
          this._router.navigate(['/GamePage',this.playerForm.value.paletteSelected]);
        } else {
          this.showErrorMessages();
          console.log('auth failed', data);
          this.isTokenValid = false;
          localStorage.setItem('isInfoSubmitted',`false`);
          this.snackBar.open('Your token is invalid','Close',{
            duration:5000,
            verticalPosition:'top',
            horizontalPosition:'center',
            panelClass:'custom-error-snackbar',
          });
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
        auth_token:'',
        paletteSelected:`${localStorage.getItem('pallete')}`

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
      localStorage.setItem('pallete',`${this.playerForm.value.paletteSelected}`)
      this.moveToGame()
    }
    else{
      this.showErrorMessages()
      console.log('gib errors')
    }
  }
}
