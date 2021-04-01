import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { STEAM_STATE_KEY, SteamModule, steamReducer } from 'src/libs/steam';
import { StoreModule } from '@ngrx/store';
import { KeyPromptComponent } from './key-prompt/key-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    KeyPromptComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SteamModule,
    StoreModule.forRoot({
      [STEAM_STATE_KEY]: steamReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
