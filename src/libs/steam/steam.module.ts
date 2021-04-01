import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { CookieService } from "../utils/cookie.service";
import { SteamEffects } from "./state/steam.effects";
import { SteamService } from "./steam.service";

@NgModule({
  imports: [EffectsModule.forFeature([SteamEffects])],
  providers: [
    SteamService,
    CookieService,
  ],
})
export class SteamModule { }
