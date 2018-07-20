import { combineReducers } from 'redux';
import User from './user';
import Profile from './profile';
import Posts from './posts';

const blogApp = combineReducers({
User,
Profile,
Posts
})

export default blogApp

