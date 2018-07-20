import { SET_SHOW } from '../ActionTypes/postsActionTypes';

const initialState = {
  posts: [],
  show: false,
  currentPost: []
}

const Posts = (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS_RECEIVED' :
      return {
        ...state,
        posts: action.posts
      };
    case SET_SHOW:
      return {
        ...state,
        show: action.text
      };
    default:
      return state;
  }
}

export default Posts;