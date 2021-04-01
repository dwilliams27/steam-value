import { NgModule } from "@angular/core";
import { CookieService } from "../utils/cookie.service";
import { SteamService } from "./steam.service";

@NgModule({
  providers: [
    SteamService,
    CookieService
  ],
})
export class SteamModule { }
