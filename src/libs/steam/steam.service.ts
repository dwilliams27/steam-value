import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { tap } from 'rxjs/operators';
import { STEAM_API_COOKIE_NAME } from "../common";
import { CookieService } from "../utils/cookie.service";
import { promptForApiKey, setApiKey } from "./state/steam.actions";
import { SteamState } from "./state/steam.reducer";
import { getApiKey } from "./state/steam.selectors";

export const STEAM_URL = 'http://api.steampowered.com';

@Injectable()
export class SteamService {
  
  _apiKey$ = this.store.pipe(select(getApiKey));

  constructor(private store: Store<SteamState>, private http: HttpClient, private cookieService: CookieService) { }

  fetchUserDetails() {
    console.log('fetch')
    return this._apiKey$.pipe(
      tap(key => this.http.get(`${STEAM_URL}/`, { params: { key }, headers: { 'Access-Control-Allow-Origin': '*' } }))
    );
  }

  getApiKey() {
    const cookie = this.getApiKeyCookie();
    if(cookie) {
      console.log('Found steam api key cookie');
      return cookie;
    }
    console.log('No cookie');
    return null;
  }

  private getApiKeyCookie() {
    return this.cookieService.getCookie('steam-value/steam-api-key');
  }

  setApiKeyCookie(key: string) {
    this.cookieService.setCookie(STEAM_API_COOKIE_NAME, key, 15);
  }
}
