import { fetchMessage, postMessage } from '../utils/message_api'

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
})

export const getMessage = messageId => dispatch => (
    fetchMessage(messageId)
        .then(message => dispatch(receiveMessage(message)))
)

export const submitMessage = message => dispatch => {
    return postMessage(message).then(message => dispatch(receiveMessage(message)))
}