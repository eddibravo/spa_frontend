import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import post from './post'

export default combineReducers({
    posts, post, routing: routerReducer
})