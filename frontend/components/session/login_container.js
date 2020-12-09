import React from 'react';
import { connect } from "react-redux";
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form'

const msp = state => ({
    errors: state.errors.session,
    formType: 'Log In',
    formHeader: 'Log in to Switch'
})

const mdp = dispatch => ({
    processForm: formUser => dispatch(login(formUser)),
    loginDemoUser: demoUser => dispatch(login(demoUser)),
    otherForm: (
        <button onClick={() => dispatch(openModal('Sign Up'))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SessionForm);