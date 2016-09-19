import jwtDecode from 'jwt-decode'
import { JWT_TOKEN } from '../constants/general'
import { loginSuccess, logout } from '../actions/AuthActions'

export const authenticate = store => next => action => {

    let nextAction = next(action)
    let auth = store.getState().auth
    let jwt = localStorage.getItem(JWT_TOKEN) || null
    if(!jwt)
    {
        if(auth.isAuthenticated) // если ключа в localStore нет, но юзер числится как авторизованный
            store.dispatch(logout())
        return nextAction
    }

    try{
        let decode = jwtDecode(jwt)

        if(auth.isAuthenticated && decode.exp < parseInt(Date.now()/1000)){ // юзер авторизован, и истек срок действия ключа
            store.dispatch(logout())
        }else if(!auth.isAuthenticated){ // авторизуем юзера если всё ок.
            store.dispatch(loginSuccess({jwt_token: jwt, user: decode}))
        }
    }catch (e) {
        store.dispatch(logout())
        console.error(e)
    }
    return nextAction
}