import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SteamState } from "./steam.reducer";

export const STEAM_STATE_KEY = 'steam';

export const getSteamState = createFeatureSelector<SteamState>(STEAM_STATE_KEY)

export const getApiKey = createSelector(getSteamState, (state) => (state.apiKey));

export const getDisplayKeyPrompt = createSelector(getSteamState, (state) => (state.displayKeyPrompt));
