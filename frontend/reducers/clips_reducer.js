import { RECEIVE_CLIP, RECEIVE_CLIPS } from '../actions/clip_actions'

const ClipsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_CLIPS:
            return action.clips
        case RECEIVE_CLIP:
            return Object.assign({}, oldState, {[action.clip.id]: action.clip})
        default:
            return oldState
    }
}

export default ClipsReducer;