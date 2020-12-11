import { connect } from 'react-redux';
import { getClip } from '../../actions/clip_actions'
import Clip from './clip_show'

const msp = (state, ownProps) => ({
    clipId: ownProps.match.params.clipId,
    clip: state.entities.clips[ownProps.match.params.clipId]
})

const mdp = dispatch => ({
    getClip: clipId => dispatch(getClip(clipId))
})

export default connect(msp, mdp)(Clip)