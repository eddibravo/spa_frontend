import { ADD_POST } from '../constants/post'

export function addPost(post) {
    return {
        type: ADD_POST,
        payload: post
    }
}