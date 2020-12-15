import { RECEIVE_CLIP, RECEIVE_CLIPS, REMOVE_CLIP } from '../actions/clip_actions'

const ClipsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_CLIPS:
            return action.clips
        case RECEIVE_CLIP:
            return Object.assign({}, oldState, {[action.clip.id]: action.clip})
        case REMOVE_CLIP:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.clip]
            return nextState;
        default:
            return oldState
    }
}

export default ClipsReducer;