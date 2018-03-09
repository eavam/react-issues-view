import { createAction, createReducer } from 'redux-act';

export const setAutocompliteList = createAction('Ducks/Autocompolite/SetAutocompliteList');
export const requestAutocompliteList = createAction('Ducks/Autocompolite/RequestAutocompliteList');
export const resetAutocompliteList = createAction('Ducks/Autocompolite/ResetAutocompliteList');

const initState = {
  loading: false,
  autocompliteIds: [],
  response: null,
};

const reducer = {};

reducer[setAutocompliteList] = (state, response) => ({
  ...state,
  response,
  autocompliteIds: response.result.items,
  loading: false,
});

reducer[requestAutocompliteList] = state => ({
  ...state,
  loading: true,
});

reducer[resetAutocompliteList] = state => ({
  ...state,
  response: null,
  autocompliteIds: [],
  loading: false,
});

export default createReducer(reducer, initState);
