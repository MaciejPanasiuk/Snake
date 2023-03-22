import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSnakeModule } from 'ngx-snake';

import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import {FormsModule} from "@angular/forms";
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';
import { PlayerFormComponent } from './title-page/player-form/player-form.component';
import { GameInfoComponent } from './game-page/game-info/game-info.component';
import { ControllerComponent } from './game-page/controller/controller.component';
import { GameStatusComponent } from './game-page/game-status/game-status.component';

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
    
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'TitlePage',component: TitlePageComponent},
      {path:'GamePage',component: GamePageComponent},
      {path:'**',redirectTo: 'TitlePage'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
