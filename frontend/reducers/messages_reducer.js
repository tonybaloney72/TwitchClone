import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, CLEAR_MESSAGES } from '../actions/message_actions'

const MessageReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_MESSAGES:
            return action.messages
        case RECEIVE_MESSAGE:
            return Object.assign({}, oldState, {[action.message.id]: action.message})
        case CLEAR_MESSAGES:
            return {}
        default:
            return oldState
    }
}

export default MessageReducer;