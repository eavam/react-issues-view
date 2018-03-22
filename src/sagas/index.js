import { delay } from 'redux-saga';
import { call, put, select, takeLatest, cancel } from 'redux-saga/effects';

import { autocomliteSchema, issuesSchema } from '../schemas';
import { getFieldUserName, getFieldRepoName, getPage } from '../selectors';

import {
  setIssues,
  // resetIssues,
  requestIssues,
  requestNextPageIssues,
  successNextPageIssues,
} from '../ducks/issues';
import { changeRepoName } from '../ducks/fields';
import { requestIssuePage, successIssuePage } from '../ducks/issuePage';
import { requestAutocompliteList, successAutocompliteList } from '../ducks/autocomplite';

function* fetchAutocompliteList() {
  yield call(delay, 500);
  const userName = yield select(getFieldUserName);
  const repoName = yield select(getFieldRepoName);

  if (repoName.length < 2 || !userName) yield cancel();

  const url = `https://api.github.com/search/repositories?q=${repoName}+user:${userName}&sort=updated`;

  try {
    yield put(requestAutocompliteList());

    // yield put(resetIssues());
    const response = yield call(fetch, url);
    const responseJson = yield response.json();

    yield put(successAutocompliteList(autocomliteSchema(responseJson)));
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* fetchIssues({ payload }) {
  const userName = yield select(getFieldUserName);

  const url = `https://api.github.com/repos/${userName}/${payload}/issues`;

  try {
    const response = yield call(fetch, url);
    const responseJson = yield response.json();

    yield put(setIssues(issuesSchema(responseJson)));
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* setRepoName({ payload }) {
  yield put(changeRepoName({ target: { value: payload } }));
}

function* fetchNextPageIssues() {
  const userName = yield select(getFieldUserName);
  const repoName = yield select(getFieldRepoName);
  const page = yield select(getPage);

  const url = `https://api.github.com/repos/${userName}/${repoName}/issues?page=${page}`;

  try {
    const response = yield call(fetch, url);
    const responseJson = yield response.json();

    yield put(successNextPageIssues(issuesSchema(responseJson)));
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* fetchIssuePage({ payload }) {
  const { userName, repoName, id } = payload;

  const url = `https://api.github.com/repos/${userName}/${repoName}/issues/${id}`;

  try {
    const response = yield call(fetch, url);
    const responseJson = yield response.json();

    yield put(successIssuePage(responseJson));
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export default function* () {
  yield takeLatest(changeRepoName, fetchAutocompliteList);
  yield takeLatest(requestIssues, setRepoName);
  yield takeLatest(requestIssues, fetchIssues);
  yield takeLatest(requestNextPageIssues, fetchNextPageIssues);
  yield takeLatest(requestIssuePage, fetchIssuePage);
}
