import { select, Store } from "@ngrx/store";
import { SteamState } from "..";
import { getDisplayKeyPrompt } from "./steam.selectors";


export class SteamFacade {
  constructor(private store: Store<SteamState>) {}
  
  getDisplayKeyPrompt$ = this.store.pipe(select(getDisplayKeyPrompt));
}
