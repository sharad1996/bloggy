import { call, put, takeLatest } from 'redux-saga/effects';
import { postUserDetails } from '../api/postSignUpData';
import { USER_SIGN_UP_REQUEST, USER_SIGN_UP_REQUEST_SUCCEED, USER_SIGN_UP_REQUEST_FAILED } from '../ActionTypes/usersActionTypes';
import history from '../components/history';

const signUpRequest = function* (action) {
  try {
    let response;
    response = yield call(postUserDetails, action.data);
    if(response.status) {
      yield put({type: USER_SIGN_UP_REQUEST_SUCCEED, response});
      history.push('/login');
    }
    else {
      yield put({type: USER_SIGN_UP_REQUEST_FAILED, response});
      history.push('/signup');
    }
  } catch (e) {
      yield put({type: USER_SIGN_UP_REQUEST_FAILED, message: e.message});
  }
}

export const signUpSaga = [
  takeLatest(USER_SIGN_UP_REQUEST, signUpRequest),
]