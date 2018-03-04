import { createAction, createReducer } from 'redux-act';

export const changeUserName = createAction('Form/ChangeUserName', event => event.target.value);
export const changeRepoName = createAction('Form/ChangeRepoName', event => event.target.value);

const initState = {
  userName: '',
  repoName: '',
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

export default createReducer(reducer, initState);
