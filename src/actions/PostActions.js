import { ADD_POST_REQUEST ,
    ADD_POST_SUCCESS,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS} from '../constants/post'

function paramsToPostRequest(method='POST', params={})
{
    return {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            post: params
        })
    }
}

function checkResponseStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}

export function addPost(new_post) {
    return(dispatch) => {
        dispatch({
            type: ADD_POST_REQUEST,
            payload: new_post
        })

        fetch(process.env.BACKEND_SERVER.trimRight('/') + '/api/posts', paramsToPostRequest('POST', new_post))
            .then(checkResponseStatus)
            .then(parseJSON)
            .then((data)=> {
                dispatch({
                    type: ADD_POST_SUCCESS,
                    payload: data['data']
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

        fetch(process.env.BACKEND_SERVER.trimRight('/')+ '/api/posts')
            .then(checkResponseStatus)
            .then(parseJSON)
            .then((data)=> {
                dispatch({
                    type: FETCH_POSTS_SUCCESS,
                    payload: data['data'].map((t) => {
                        return {id: t['id'], title: t['attributes']['title'], body: t['attributes']['body'], username: t['attributes']['username']};
                    })
                })
            } ).catch((e) => {
                alert(e) // ошибки пока просто алертим, ибо я не уверен что у нас останутся эти функции fetch, а как обрабатывать ошибки это отдельная история.
        })
    }
}
export function removePost(post) {
    return(dispatch) => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            payload: post
        })
        fetch(process.env.BACKEND_SERVER.trimRight('/') + '/api/posts/'+post.id, paramsToPostRequest('DELETE'))
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