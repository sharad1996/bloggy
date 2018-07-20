import { call, put, takeLatest } from 'redux-saga/effects';
import { postUser } from '../api/postLoginData';
import { USER_LOGIN_REQUEST, USER_LOGIN_REQUEST_SUCCEED, USER_LOGIN_REQUEST_FAILED } from '../ActionTypes/usersActionTypes';
import history from '../components/history';

const loginRequest = function* (action) {
  try {
    let response;
    response = yield call(postUser, action.data);
    if(response.status) {
      localStorage.setItem('token', response.token);
      yield put({type: USER_LOGIN_REQUEST_SUCCEED, response});
      history.push('/');
    }
    else {
      yield put({type: USER_LOGIN_REQUEST_FAILED, response});
      yield put({type: 'LOGIN_RESPONSE_RECEIVED', response});
      history.push('/login');
    }
  } catch (e) {
      yield put({type: USER_LOGIN_REQUEST_FAILED, message: e.message});
  }
}

export const loginSaga = [
  takeLatest(USER_LOGIN_REQUEST, loginRequest),
]