import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getClip, deleteClip } from '../../actions/clip_actions'
import { getCategories } from '../../actions/category_actions'
import Clip from './clip_show'

const msp = (state, ownProps) => ({
    clipId: ownProps.match.params.clipId,
    clip: state.entities.clips[ownProps.match.params.clipId],
    currentUser: state.session.currentUser
})

const mdp = dispatch => ({
    getClip: clipId => dispatch(getClip(clipId)),
    deleteClip: clip => dispatch(deleteClip(clip)),
    getCategories: () => dispatch(getCategories())
})

export default withRouter(connect(msp, mdp)(Clip))