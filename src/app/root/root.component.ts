import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDisplayKeyPrompt, loadApiKey, setApiKey, SteamState } from 'src/libs/steam';
import { SteamService } from 'src/libs/steam/steam.service';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  displayKeyPrompt$ = this.store.select(getDisplayKeyPrompt);

  constructor(private steamService: SteamService, private store: Store<SteamState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadApiKey());
  }
}
