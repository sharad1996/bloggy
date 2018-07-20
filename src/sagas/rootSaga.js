import { all } from 'redux-saga/effects';
import { signUpSaga } from './registrationSaga';
import { loginSaga } from './loginSaga';
import { postsSaga } from './postRequestSaga';

export function* rootLoad() {
  yield all([
    ...loginSaga,
    ...postsSaga,
    ...signUpSaga
  ])
}