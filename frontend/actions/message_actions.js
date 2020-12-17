import { fetchMessages, fetchMessage, postMessage } from '../utils/message_api'

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES'

const receiveMessage = message => {
    return({
        type: RECEIVE_MESSAGE,
        message
    })
}

const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const clearMessages = () => ({
    type: CLEAR_MESSAGES
})

export const getMessages = clipId => dispatch => (
    fetchMessages(clipId)
        .then(messages => dispatch(receiveMessages(messages)))
)

export const getMessage = messageId => dispatch => (
    fetchMessage(messageId)
        .then(message => dispatch(receiveMessage(message)))
)

export const submitMessage = message => dispatch => {
    return (
        postMessage(message)
            .then(message => dispatch(receiveMessage(message)))
    )
}