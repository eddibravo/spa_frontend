import { BACKEND_URL_SIGN_IN, JWT_TOKEN } from '../constants/general'
import { push } from 'react-router-redux'
import { checkResponseStatus, parseJSON } from '../actions/fetchActions'
import * as auth_c from '../constants/auth'
import jwtDecode from 'jwt-decode'

function loginRequest(user_data) {
    return{
        type: auth_c.SIGN_IN_REQUEST,
        payload: user_data
    }
}
export function getToken() {
    return localStorage.getItem(JWT_TOKEN) || null
}

export function removeToken() {
    localStorage.removeItem(JWT_TOKEN);
}

export function setToken(token) {
    localStorage.setItem(JWT_TOKEN, token);
}


export function loginSuccess(payload) {
    setToken(payload.jwt_token)
    return{
        type: auth_c.SIGN_IN_SUCCESS,
        payload: payload
    }
}

export function logout() {
    removeToken()
    return{
        type: auth_c.SIGN_OUT,
        payload: null
    }
}

export function logoutAndRedirect() {
    return(dispatch) => {
        dispatch(logout())
        dispatch(push('/sign_in'))
    }
}

function loginFailure(error) {
    removeToken()
    return {
        type: auth_c.SIGN_IN_FAIL,
        payload: {
            status: error.status,
            statusText: error.statusText
        }
    }
}


export function signIn(user_data) {

    let params= {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({auth: user_data})
    }

    return(dispatch) => {
        dispatch(loginRequest(user_data))

        fetch(BACKEND_URL_SIGN_IN, params)
            .then(checkResponseStatus)
            .then(parseJSON)
            .then(response => {
                try{
                    let decode = jwtDecode(response.jwt)
                    dispatch(loginSuccess({jwt_token: response.jwt, user: decode}))
                    dispatch(push('/'))
                }catch (e) {
                    dispatch(loginFailure({
                        status: 403,
                        statusText: 'Invalid token'
                    }))
                }
            }).catch(e => {
                dispatch(loginFailure({
                    status: e.response.status,
                    statusText: e.response.status == 404 ? 'Invalid username or password' : e.response.statusText
                }))
        })
    }
}

