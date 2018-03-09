import { createAction, createReducer } from 'redux-act';

export const requestIssues = createAction('Ducks/Issues/RequestIssues', event => event.target.id);
export const setIssues = createAction('Ducks/Issues/SetIssues');

const initState = {
  loading: false,
  issuesIds: [],
  response: null,
};

const reducer = {};

reducer[setIssues] = (state, response) => ({
  ...state,
  response,
  issuesIds: response.result,
  loading: false,
});

reducer[requestIssues] = state => ({
  ...state,
  loading: true,
});

export default createReducer(reducer, initState);
