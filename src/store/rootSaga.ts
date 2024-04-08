import {all, call, spawn} from 'redux-saga/effects';

import {rootAppCommonSaga} from './modules/AppCommon/sagas';

export function* rootSaga() {
  const sagas = [rootAppCommonSaga];
  yield all([
    ...sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (error) {
            // TODO: Log error
            console.log('error', error);
          }
        }
      }),
    ),
  ]);
}
