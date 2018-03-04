import { delay } from 'redux-saga';
import { call, put, select, takeLatest, cancel } from 'redux-saga/effects';
import { getFieldUserName } from '../selectors';
import { changeRepoName } from '../ducks/fields';
import { requestAutocompliteList, setAutocompliteList } from '../ducks/autocomplite';

function* fetchAutocompliteList({ payload }) {
  yield call(delay, 500);

  if (payload.length < 2) yield cancel();

  const username = yield select(getFieldUserName);

  const url = `https://api.github.com/search/repositories?q=${payload}+user:${username}&sort=updated`;

  try {
    yield put(requestAutocompliteList());

    const responseJson = yield call(fetch, url);
    const response = yield responseJson.json();

    yield put(setAutocompliteList([...response.items]));
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export default function* () {
  yield takeLatest(changeRepoName, fetchAutocompliteList);
}
