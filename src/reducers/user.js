const initialState = {
  token: '',
  message: '',
  authenticated: false
}

const User = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATED_USER':
      return {
        ...state,
        authenticated: true,
        token: action.token
      };
    case 'SIGNUP_RESPONSE_RECEIVED' :
      return {
        ...state,
        message: action.response.message
      };
    case 'LOGIN_RESPONSE_RECEIVED' :
      return {
        ...state,
        message: action.response.message,
        authenticated: true,
        token: action.token
      };
    default:
      return state;
  }
}

export default User;