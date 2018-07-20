import { call, put, takeLatest } from 'redux-saga/effects';
import { uploadPost, uploadProfileImage } from '../api/uploadPostData';
import { loadPostData } from '../api/loadPostData';
import { POST_REQUEST, LOAD_POSTS } from '../ActionTypes/postsActionTypes';
import { HANDLE_PROFILE_IMAGE } from '../ActionTypes/profileActionTypes';

const postRequest  = function* (action)   {
  yield call(uploadPost, action.data);
}

const loadPosts  = function* ()  {
  const posts = yield call(loadPostData);
  yield put({type: 'POSTS_RECEIVED', posts});
}

const setProfileImage = function* ()  {
  const data = yield call(uploadProfileImage);
  yield put({type: 'HANDLE_PROFILE_IMAGE', data});
}

export const postsSaga = [
  takeLatest(POST_REQUEST, postRequest),
  takeLatest(HANDLE_PROFILE_IMAGE, setProfileImage),
  takeLatest(LOAD_POSTS, loadPosts)
]