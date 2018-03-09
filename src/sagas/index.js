import { delay } from 'redux-saga';
import { call, put, select, takeLatest, cancel } from 'redux-saga/effects';
import { getFieldUserName } from '../selectors';
import { changeRepoName } from '../ducks/fields';
import { requestAutocompliteList, setAutocompliteList } from '../ducks/autocomplite';
import { autocomliteSchema, issuesSchema } from '../schemas';
import { requestIssues, setIssues } from '../ducks/issues';

function* fetchAutocompliteList({ payload }) {
  yield call(delay, 500);

  if (payload.length < 2) yield cancel();

  const userName = yield select(getFieldUserName);

  const url = `https://api.github.com/search/repositories?q=${payload}+user:${userName}&sort=updated`;

  try {
    yield put(requestAutocompliteList());

    const response = yield call(fetch, url);
    const responseJson = yield response.json();

    yield put(setAutocompliteList(autocomliteSchema(responseJson)));
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* fetchIssues({ payload }) {
  const userName = yield select(getFieldUserName);

  const url = `https://api.github.com/repos/${userName}/${payload}/issues`;

  try {
    // yield put(requestAutocompliteList());

    const response = yield call(fetch, url);
    const responseJson = yield response.json();

    yield put(setIssues(issuesSchema(responseJson)));
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export default function* () {
  yield takeLatest(changeRepoName, fetchAutocompliteList);
  yield takeLatest(requestIssues, fetchIssues);
}
