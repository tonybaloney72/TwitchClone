import { fetchClips, fetchClip } from '../utils/category_api'

export const RECEIVE_CLIPS = 'RECEIVE_CLIPS';
export const RECEIVE_CLIP = 'RECEIVE_CLIP';

const receiveClips = clips => ({
    type: RECEIVE_CLIPS,
    clips
})

const receiveClip = clipId => ({
    type: RECEIVE_CATEGORY,
    clipId
})

export const getClips = () => dispatch => (
    fetchClips()
        .then(clips => dispatch(receiveClips(clips)))
)

export const getClip = clipId => dispatch => (
    fetchClip(clipId)
        .then(clipId => dispatch(receiveClip(clipId)))
)