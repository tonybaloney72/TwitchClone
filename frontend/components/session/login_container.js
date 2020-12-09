import React from 'react';
import { connect } from "react-redux";
import { login, clearErrors } from '../../actions/session_actions';
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
        <button onClick={() => { dispatch(openModal('Sign Up')); dispatch(clearErrors()); }}>Sign Up</button>
    ),
    closeModal: () => dispatch(closeModal()),
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);