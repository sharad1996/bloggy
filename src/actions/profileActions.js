import { SET_SHOW_MODAL, HANDLE_PROFILE_IMAGE } from '../ActionTypes/profileActionTypes';

export const setShowModal = text => ({ type: SET_SHOW_MODAL, text });
export const handleProfileImage = text => ({ type: HANDLE_PROFILE_IMAGE, text });