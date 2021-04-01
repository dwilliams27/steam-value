import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { SteamState } from 'src/libs/steam';
import { setApiKey } from 'src/libs/steam';

@Component({
  selector: 'app-key-prompt',
  templateUrl: './key-prompt.component.html',
  styleUrls: ['./key-prompt.component.scss']
})
export class KeyPromptComponent implements OnInit {

  private _key: string | null;

  constructor(private store: Store<SteamState>) {
    this._key = window.prompt("Please enter your steam api key");
  }

  ngOnInit(): void {
    if(this._key) {
      setTimeout(() => this.store.dispatch(setApiKey({ key: this._key ?? '' })), 100);
    }
  }

}
