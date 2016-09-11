import { ADD_POST } from '../constants/post'

const initialState = {
    id: 0,
    title: '',
    body: '',
    username: ''

}

export default function post(state=initialState, action) {
    switch(action.type)
    {
        case ADD_POST:
            console.log('Hello redux!')
            return {...state, post: action.payload }
        default:
            return state
    }
}