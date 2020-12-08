import * as APIUtil from '../utils/session'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receieveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const createNewUser = formUser => {
    // debugger
    return function (dispatch) {
        // debugger
        return (
            postUser(formUser)
                .then(user => dispatch(receieveCurrentUser(user)))
        )
    }
}

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(user => dispatch(receieveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))
)

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()),
        error => dispatch(receiveErrors(error.responseJSON)))
)

export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(user => dispatch(receieveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))
)