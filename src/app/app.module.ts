import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSnakeModule } from 'ngx-snake';
import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { RouterModule } from '@angular/router';
import { PlayerFormComponent } from './title-page/player-form/player-form.component';
import { GameInfoComponent } from './game-page/game-info/game-info.component';
import { ControllerComponent } from './game-page/controller/controller.component';
import { GameStatusComponent } from './game-page/game-status/game-status.component';
import {HttpClientModule} from "@angular/common/http";
import { HighScoresComponent } from './game-page/high-scores/high-scores.component';
import { OnlyXBestPipe } from './pipes/OnlyXbest/only-xbest.pipe';
import { PlayerDataGuardService } from './services/route-guard/player-data-guard.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
    PageNotFoundComponent,   
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NgxSnakeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'TitlePage',component: TitlePageComponent},
      {path:'GamePage/:palette',component: GamePageComponent,canActivate: [PlayerDataGuardService]},
      {path:'',redirectTo: '/TitlePage', pathMatch: 'full' },
      // {path:'GamePage/:palette',component: GamePageComponent},
      // {path:'**',redirectTo: 'TitlePage'}
      {path:'**',component: PageNotFoundComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
