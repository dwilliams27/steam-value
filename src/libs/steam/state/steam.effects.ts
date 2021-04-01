import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { SteamState } from "..";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects"
import { loadApiKey, promptForApiKey, setApiKey } from "./steam.actions";
import { of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { SteamService } from "../steam.service";

@Injectable()
export class SteamEffects {
  constructor(private actions: Actions, private store: Store<SteamState>, private steamService: SteamService) { }

  promptUserIfNeeded$ = createEffect(() => 
    this.actions.pipe(
      ofType(loadApiKey),
      switchMap(() => {
        let key = this.steamService.getApiKey();
        console.log(key);
        if(!key) {
          return of(promptForApiKey());
        }
        return of(setApiKey({ key }));
      }
    )
  ));

  setCookie$ = createEffect(() => 
    this.actions.pipe(
      ofType(setApiKey),
      tap((data) => this.steamService.setApiKeyCookie(data.key))
    )
  );
}
