import { connect } from 'react-redux';
import Clip from './clips'

const msp = (state, ownProps) => ({
    clip: state.entities.clips[ownProps.match.params.clipId]
})

const mdp = dispatch => ({

})

export default connect(msp, mdp)(Clip)