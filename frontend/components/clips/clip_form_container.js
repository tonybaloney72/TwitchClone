import { connect } from 'react-redux';
import ClipForm from './clip_form';

// const msp = state => ({
//     stuff: state.something
// })

// const mdp = dispatch => ({
//     action: some.action?
// })

export default connect(msp, mdp)(ClipForm)