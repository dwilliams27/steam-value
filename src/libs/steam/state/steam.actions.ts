import { createAction, props } from "@ngrx/store";
import { UserDetailsResponse } from "./steam.models";

export const fetchUserDetails = createAction('[Steam service] Fetch user details');

export const fetchUserDetailsSuccess = createAction('[Steam service] Fetch user details success', props<{ response: UserDetailsResponse }>());

export const fetchUserDetailsFail = createAction('[Steam service] Fetch user details failure', props<{ message: string }>());

export const setApiKey = createAction('[Steam service] Set api key', props<{key: string}>());

export const loadApiKey = createAction('[Steam service] Load api key from cookie into state');

export const promptForApiKey = createAction('[Steam service] Prompt user for api key');
