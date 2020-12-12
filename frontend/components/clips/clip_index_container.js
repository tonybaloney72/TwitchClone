import { connect } from 'react-redux';
import { getClips } from '../../actions/clip_actions';
import ClipIndex from './clip_index';

const msp = state => ({
    clips: Object.values(state.entities.clips)
});

const mdp = dispatch => ({
    getClips: () => dispatch(getClips())
});

export default connect(msp, mdp)(ClipIndex)