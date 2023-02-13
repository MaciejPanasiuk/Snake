import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSnakeModule } from 'ngx-snake';

import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import {FormsModule} from "@angular/forms";
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    GamePageComponent,
    SortPipe,
    FilterPipe
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
