import { fetchClips, fetchClip, postClip, destroyClip } from '../utils/clips_api'

export const RECEIVE_CLIPS = 'RECEIVE_CLIPS';
export const RECEIVE_CLIP = 'RECEIVE_CLIP';
export const REMOVE_CLIP = 'REMOVE_CLIP';
export const RECEIVE_CLIP_ERRORS = 'RECEIVE_CLIP_ERRORS'
export const CLEAR_CLIP_ERRORS = 'CLEAR_CLIP_ERRORS'

const receiveClips = clips => ({
    type: RECEIVE_CLIPS,
    clips
})

const receiveClip = clip => ({
    type: RECEIVE_CLIP,
    clip
})

const removeClip = clip => ({
    type: REMOVE_CLIP,
    clip
})

export const receiveErrors = errors => ({
    type: RECEIVE_CLIP_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_CLIP_ERRORS
})

export const getClips = () => dispatch => (
    fetchClips()
        .then(clips => dispatch(receiveClips(clips)))
)

export const getClip = clipId => dispatch => (
    fetchClip(clipId)
        .then(clip => dispatch(receiveClip(clip)))
)

export const submitClip = clip => dispatch => (
    postClip(clip)
        .then(clip => dispatch(receiveClip(clip))),
        error => dispatch(receiveErrors(error.responseJSON)))

export const deleteClip = clipId => dispatch => (
    destroyClip(clipId)
        .then(clip => dispatch(removeClip(clip))),
        error => dispatch(receiveErrors(error.responseJSON)))