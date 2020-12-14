import {
    // RECEIVE_CLIP, don't know if I need
    RECEIVE_CLIP_ERRORS,
    CLEAR_CLIP_ERRORS
    } from '../actions/clip_actions'

const clipErrorsReducer = (oldstate = [], action) => {
    Object.freeze(oldstate);
    switch(action.type) {
        case RECEIVE_CLIP_ERRORS:
            return action.errors;
        // case RECEIVE_CLIP:
        //     return [];
        case CLEAR_CLIP_ERRORS:
            return [];
        default:
            return oldstate;
    }
}

export default clipErrorsReducer;