export const BACKEND = process.env.BACKEND_SERVER.trimRight('/') + '/api'
export const BACKEND_URL_POSTS = BACKEND + '/posts'
export const BACKEND_URL_SIGN_IN = BACKEND + '/auth/sign_in'

export const JWT_TOKEN = 'jwt_token'