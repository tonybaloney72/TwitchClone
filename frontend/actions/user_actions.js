import * as UserAPI from '../utils/user_api'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const UPDATE_USER = "UPDATE_USER"

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const getUser = userId => dispatch => (
    UserAPI.fetchUser(userId)
        .then(user => dispatch(receiveCurrentUser(user)))
)

const receiveUpdatedUser = user => ({
    type: UPDATE_USER,
    user
})

export const updateUser = userId => dispatch => (
    UserAPI.updateUser(userId, formData)
        .then(user => dispatch(receiveUpdatedUser(user)))
)