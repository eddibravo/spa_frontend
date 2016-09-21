import jwtDecode from 'jwt-decode'
import { loginSuccess, logout, getToken } from '../actions/AuthActions'

export const authenticate = store => next => action => {

    let nextAction = next(action)
    const { auth } = store.getState()
    let jwt = getToken()
    if(!jwt)
    {
        if(auth.isAuthenticated) // если ключа в localStore нет, но юзер числится как авторизованный
            store.dispatch(logout())
        return nextAction
    }

    try{
        let decode = jwtDecode(jwt)

        if(auth.isAuthenticated && decode.exp < parseInt(Date.now()/1000)){ // юзер авторизован, и истек срок действия ключа. Тут не понятно как быть с часовыми поясами сервера и посетителя?
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