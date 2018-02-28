import { call, put, select, throttle } from 'redux-saga/effects';
import { getFieldUserName } from '../selectors';
import { changeRepoName, requestAutocompliteList, setAutocompliteList } from '../ducks/fields';

function* fetchAutocompliteList(action) {
  const username = yield select(getFieldUserName);

  const url = `https://api.github.com/search/repositories?q=${
    action.payload
  }+user:${username}&sort=updated`;

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
  yield throttle(700, changeRepoName, fetchAutocompliteList);
}
