import { SET_SHOW_MODAL } from '../ActionTypes/profileActionTypes'

const initialState = {
  id: 1,
  text: '',
  showModal: false,
  file: '',
};

const Profile = (state = initialState, action) => {

  switch (action.type) {
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.text
      };

    default:
      return state
  }
}

export default Profile