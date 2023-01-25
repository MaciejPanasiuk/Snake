import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSnakeModule } from 'ngx-snake';

import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
