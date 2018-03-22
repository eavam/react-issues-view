import { createAction, createReducer } from 'redux-act';

export const requestIssuePage = createAction('Ducks/IssuePage/RequestIssuePage');
export const successIssuePage = createAction('Ducks/IssuePage/SuccessIssuePage');

const initState = {
  issue: null,
  loading: true,
};

const reducer = {};

reducer[requestIssuePage] = state => ({
  ...state,
  loading: true,
});

reducer[successIssuePage] = (state, payload) => ({
  ...state,
  loading: false,
  issue: payload,
});

export default createReducer(reducer, initState);
