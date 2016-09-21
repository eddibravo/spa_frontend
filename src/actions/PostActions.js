import { ADD_POST_SUCCESS,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS } from '../constants/post'
import { BACKEND_URL_POSTS } from '../constants/general'
import { checkResponseStatus, parseJSON } from '../actions/fetchActions'

function authorizeHeader(token){
    return {
        'Authorization': `Bearer ${token}`
    }
}

function paramsToPostRequest(options={})
{
    let _headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return {
        method: options.method || 'POST',
        headers: Object.assign(_headers, options.headers),
        body: options.body ?  JSON.stringify(options.body) : null
    }
}


export function addPost(new_post) {
    return(dispatch, getState) => {
        const state = getState()
        let params = { body: {post: new_post} }
        if(state.auth.isAuthenticated){
            params.headers = authorizeHeader(state.auth.jwt_token)
        }

        fetch(BACKEND_URL_POSTS, paramsToPostRequest(params))
            .then(checkResponseStatus)
            .then(parseJSON)
            .then((data)=> {
                dispatch({
                    type: ADD_POST_SUCCESS,
                    payload: data
                })
            }).catch((e) => {
            alert(e)
        })
    }
}

export function fetchPosts() {
    return(dispatch) => {
        dispatch({
            type: FETCH_POSTS_REQUEST,
            payload: null
        })

        fetch(BACKEND_URL_POSTS)
            .then(checkResponseStatus)
            .then(parseJSON)
            .then((data)=> {
                dispatch({
                    type: FETCH_POSTS_SUCCESS,
                    payload: data
                })
            } ).catch((e) => {
                alert(e)
        })
    }
}

export function fetchPost(id){
    return(dispatch) => {
        dispatch({
            type: FETCH_POST_REQUEST,
            payload: id
        })

        fetch(`${BACKEND_URL_POSTS}/${id}`)
            .then(checkResponseStatus)
            .then(parseJSON)
            .then((data)=> {
                dispatch({
                    type: FETCH_POST_SUCCESS,
                    payload: data
                })
            } ).catch((e) => {
            alert(e)
        })
    }
}
export function removePost(post) {
    return(dispatch, getState) => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            payload: post
        })
        const state = getState()
        let params = { method: 'DELETE' }
        if(state.auth.isAuthenticated){
            params.headers = authorizeHeader(state.auth.jwt_token)
        }

        fetch(`${BACKEND_URL_POSTS}/${post.id}`, paramsToPostRequest(params))
            .then(checkResponseStatus)
            .then(()=> {
                dispatch({
                    type: REMOVE_POST_SUCCESS,
                    payload: post
                })
            }).catch((e) => {
            alert(e)
        })
    }
}