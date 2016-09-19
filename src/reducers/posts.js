import { ADD_POST_SUCCESS,
    FETCH_POSTS_SUCCESS,
    REMOVE_POST_SUCCESS,
    REMOVE_POST_REQUEST,
    FETCH_POSTS_REQUEST } from '../constants/post'

const initialState = {
    items:[],
    adding_new_post: false,
    fetching_posts: false,
    error: null
}

export default function posts(state=initialState, action) {
    switch(action.type)
    {
        case REMOVE_POST_REQUEST:{
            return state // todo
        }
        case REMOVE_POST_SUCCESS:{
            return{ ...state, items: state.items.filter(item => item.id !== action.payload.id) }
        }
        case FETCH_POSTS_REQUEST:{
            return{...state, fetching_posts: true}
        }
        case FETCH_POSTS_SUCCESS:{
            return{...state, fetching_posts: false, items: action.payload}
        }
        case ADD_POST_SUCCESS:{
            const { id, title, body, user } = action.payload
            return {...state, adding_new_post: false, items: state.items.concat({ id, title, body, user }) }
        }
        default:{
            return state
        }
    }
}