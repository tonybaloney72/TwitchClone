import { fetchUser } from '../utils/user_api'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const getUser = userId => dispatch => (
    fetchUser(userId)
        .then(user => dispatch(receiveCurrentUser(user)))
)