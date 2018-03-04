import { createAction, createReducer } from 'redux-act';

export const setAutocompliteList = createAction('Ducks/Autocompolite/SetAutocompliteList');
export const requestAutocompliteList = createAction('Ducks/Autocompolite/RequestAutocompliteList');
export const resetAutocompliteList = createAction('Ducks/Autocompolite/ResetAutocompliteList');

const initState = {
  autocompliteList: [],
  loading: false,
};

const reducer = {};

reducer[setAutocompliteList] = (state, autocompliteList) => ({
  ...state,
  autocompliteList,
  loading: false,
});

reducer[requestAutocompliteList] = state => ({
  ...state,
  loading: true,
});

reducer[resetAutocompliteList] = state => ({
  ...state,
  autocompliteList: [],
  loading: false,
});

export default createReducer(reducer, initState);
