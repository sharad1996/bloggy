import { POST_REQUEST, LOAD_POSTS, SET_SHOW } from '../ActionTypes/postsActionTypes';

export const postRequest = data => ({ type: POST_REQUEST, data });
export const loadPosts = data => ({ type: LOAD_POSTS, data});
export const setShow = text => ({ type: SET_SHOW, text });
