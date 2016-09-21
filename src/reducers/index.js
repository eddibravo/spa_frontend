import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import post from './post'
import auth from './auth'


export default combineReducers({
    posts, post, auth, routing: routerReducer
})