import { createAction, createReducer } from 'redux-act';

export const changeUserName = createAction('Form/ChangeUserName', event => event.target.value);
export const changeRepoName = createAction('Form/ChangeRepoName', event => event.target.value);
export const setAutocompliteList = createAction('Form/SetAutocompliteList');
export const requestAutocompliteList = createAction('Form/RequestAutocompliteList');

const initState = {
  userName: '',
  repoName: '',
  autocompliteList: [],
  loading: false,
};

const reducer = {};

reducer[changeUserName] = (state, payload) => ({
  ...state,
  userName: payload,
});

reducer[changeRepoName] = (state, payload) => ({
  ...state,
  repoName: payload,
});

reducer[setAutocompliteList] = (state, payload) => ({
  ...state,
  autocompliteList: payload,
  loading: false,
});

reducer[requestAutocompliteList] = state => ({
  ...state,
  loading: true,
});

export default createReducer(reducer, initState);
