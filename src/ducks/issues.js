import { createAction, createReducer } from 'redux-act';

export const requestIssues = createAction('Ducks/Issues/RequestIssues', event => event.target.id);
export const requestNextPageIssues = createAction('Ducks/Issues/RequestNextPageIssues');
export const successNextPageIssues = createAction('Ducks/Issues/SuccessNextPageIssues');
export const setIssues = createAction('Ducks/Issues/SetIssues');
export const resetIssues = createAction('Ducks/Issues/ResetIssues');

const initState = {
  loading: false,
  loadingScroll: false,
  issuesIds: [],
  issuesItems: null,
  page: 1,
};

const reducer = {};

reducer[setIssues] = (state, payload) => ({
  ...state,
  loading: false,
  page: state.page + 1,
  issuesIds: payload.result,
  issuesItems: payload.entities.items,
});

reducer[resetIssues] = state => ({
  ...state,
  loading: false,
  page: 1,
  issuesIds: [],
  issuesItems: null,
});

reducer[requestIssues] = state => ({
  ...state,
  loading: true,
});

reducer[requestNextPageIssues] = state => ({
  ...state,
  loadingScroll: true,
});

reducer[successNextPageIssues] = (state, payload) => ({
  ...state,
  loadingScroll: false,
  page: state.page + 1,
  issuesIds: [...state.issuesIds, ...payload.result],
  issuesItems: { ...state.issuesItems, ...payload.entities.items },
});

export default createReducer(reducer, initState);
