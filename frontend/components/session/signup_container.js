import { connect } from "react-redux";
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form'

const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign Up',
    formHeader: 'Join Switch today!'
})

const mdp = dispatch => ({
    processForm: formUser => dispatch(signup(formUser)),
    loginDemoUser: demoUser => dispatch(login(demoUser)) 
});

export default connect(msp, mdp)(SessionForm);