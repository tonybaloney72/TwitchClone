import { fetchClips, fetchClip, postClip } from '../utils/clips_api'

export const RECEIVE_CLIPS = 'RECEIVE_CLIPS';
export const RECEIVE_CLIP = 'RECEIVE_CLIP';

const receiveClips = clips => ({
    type: RECEIVE_CLIPS,
    clips
})

const receiveClip = clip => ({
    type: RECEIVE_CLIP,
    clip
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
        .then(clip => dispatch(receiveClip(clip)))
)