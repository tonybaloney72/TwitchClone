import { connect } from "react-redux";
import { login } from '../../actions/session_actions';
import SessionForm from './session_form'

const msp = state => ({
    errors: state.errors.session,
    formType: 'Log In',
    formHeader: 'Log in to Switch'
})

const mdp = dispatch => ({
    processForm: formUser => dispatch(login(formUser)),
    loginDemoUser: demoUser => dispatch(login(demoUser)) 
});

export default connect(msp, mdp)(SessionForm);