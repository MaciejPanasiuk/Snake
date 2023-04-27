import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSnakeModule } from 'ngx-snake';
import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';
import { PlayerFormComponent } from './title-page/player-form/player-form.component';
import { GameInfoComponent } from './game-page/game-info/game-info.component';
import { ControllerComponent } from './game-page/controller/controller.component';
import { GameStatusComponent } from './game-page/game-status/game-status.component';
import {HttpClientModule} from "@angular/common/http";
import { HighScoresComponent } from './game-page/high-scores/high-scores.component';
import { OnlyXBestPipe } from './only-xbest.pipe';
import { PlayerDataGuardService } from './player-data-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    GamePageComponent,
    SortPipe,
    FilterPipe,
    PlayerFormComponent,
    GameInfoComponent,
    ControllerComponent,
    GameStatusComponent,
    HighScoresComponent,
    OnlyXBestPipe,
    
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'TitlePage',component: TitlePageComponent},
      // {path:'GamePage/:palette',component: GamePageComponent,canActivate: [PlayerDataGuardService]},
      {path:'GamePage/:palette',component: GamePageComponent},
      {path:'**',redirectTo: 'TitlePage'}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
