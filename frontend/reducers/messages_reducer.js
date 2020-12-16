import { RECEIVE_MESSAGE } from '../actions/message_actions'

const MessageReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_MESSAGE:
            return Object.assign({}, oldState, {[action.message.id]: action.message})
        default:
            return oldState
    }
}

export default MessageReducer;