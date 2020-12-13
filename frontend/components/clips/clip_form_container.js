import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitClip } from '../../actions/clip_actions'
import ClipForm from './clip_form';

const msp = state => ({
    userId: state.session.currentUser
})

const mdp = dispatch => ({
    submitClip: formData => dispatch(submitClip(formData))
})

export default withRouter(connect(msp, mdp)(ClipForm))