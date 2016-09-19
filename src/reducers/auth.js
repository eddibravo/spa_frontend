import * as auth_c from '../constants/auth'

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    user: {},
    jwt_token: null,
    errorMessage: ''
}

export default function auth(state = initialState, action)
{
    switch(action.type){
        case auth_c.SIGN_OUT:{
            return { ...state, isFetching:false, isAuthenticated: false, jwt_token: null, user:{}, errorMessage:'' }
        }
        case auth_c.SIGN_IN_REQUEST:{
            return {...state, isFetching: true}
        }
        case auth_c.SIGN_IN_SUCCESS:{
            const { jwt_token, user } = action.payload
            return{...state, isFetching: false, isAuthenticated: true, jwt_token: jwt_token, user: { username: user.username, id: user.id }, errorMessage: ''}
        }
        case auth_c.SIGN_IN_FAIL:{
            const { statusText } = action.payload
            return {...state, isFetching: false, errorMessage: statusText }
        }
        default:
            return state
    }
}