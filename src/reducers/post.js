import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS} from '../constants/post'

const initialState = {
    id: null,
    username: '',
    body:'',
    title:'',
    created_at: '',
    fetching: false,
    error: null
}

export default function post(state=initialState, action) {
    switch(action.type)
    {
        case FETCH_POST_REQUEST:{
            return{...state, fetching: true}
        }
        case FETCH_POST_SUCCESS:{
            return{...state, fetching: false, ...action.payload}
        }
        default:{
            return state
        }
    }
}