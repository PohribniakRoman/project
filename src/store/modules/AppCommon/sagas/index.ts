import {AppCommonActions} from '@store/modules/AppCommon/actions';
import {fork, put, take} from 'redux-saga/effects';

function* isAppInitialized() {
  // FIXME: This is temporarily
  return true;
}

export function* rootAppCommonSaga() {
  yield fork(function* () {
    while (!(yield* isAppInitialized())) {
      yield take('*');
    }
    yield put(AppCommonActions.APP_INITIALIZED.STATE.create());
  });
}
