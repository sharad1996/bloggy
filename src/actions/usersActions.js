import { USER_SIGN_UP_REQUEST, USER_LOGIN_REQUEST } from '../ActionTypes/usersActionTypes';

export const userSignUpRequest = data =>  ({
  type: USER_SIGN_UP_REQUEST, data 
});
export const userLoginRequest = data => ({ 
  type: USER_LOGIN_REQUEST, data
});


