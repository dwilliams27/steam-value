import { createReducer, on } from "@ngrx/store";
import { fetchUserDetails, fetchUserDetailsFail, fetchUserDetailsSuccess, promptForApiKey, setApiKey } from "./steam.actions";
import { UserDetailsResponse } from "./steam.models";

export interface SteamState {
  apiKey: string;
  loading: boolean;
  userDetails?: UserDetailsResponse;
  error?: string;
  displayKeyPrompt: boolean;
}

export const initialState: SteamState = {
  apiKey: '',
  displayKeyPrompt: false,
  loading: false
};

export const steamReducer = createReducer(
  initialState,
  on(fetchUserDetails, (state) => ({ ...state, loading: true })),
  on(fetchUserDetailsSuccess, (state, userDetails) => ({ ...state, userDetails, loading: false })),
  on(fetchUserDetailsFail, (state, data) => ({ ...state, error: data.message, loading: false })),
  on(setApiKey, (state, data) => ({ ...state, apiKey: data.key, displayKeyPrompt: false })),
  on(promptForApiKey, (state) => ({ ...state, displayKeyPrompt: true }))
);
