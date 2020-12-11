import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitClip } from '../../actions/clip_actions'
import ClipForm from './clip_form';

// const msp = state => ({
//     need to pass channel_id
// })

const mdp = dispatch => ({
    submitClip: formData => dispatch(submitClip(formData))
})

export default withRouter(connect(null, mdp)(ClipForm))