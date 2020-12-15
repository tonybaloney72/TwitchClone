import { connect } from 'react-redux';
import { getClip, deleteClip } from '../../actions/clip_actions'
import { getCategories, getCategory } from '../../actions/category_actions'
import Clip from './clip_show'

const msp = (state, ownProps) => ({
    clipId: ownProps.match.params.clipId,
    clip: state.entities.clips[ownProps.match.params.clipId],
    currentUser: state.session.currentUser,
    category: state.entities.categories
})

const mdp = dispatch => ({
    getClip: clipId => dispatch(getClip(clipId)),
    deleteClip: clip => dispatch(deleteClip(clip)),
    getCategories: () => dispatch(getCategories())
    // getCategory: categoryId => dispatch(getCategory(categoryId))
})

export default connect(msp, mdp)(Clip)