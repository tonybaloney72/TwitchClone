import { connect } from 'react-redux';
import NavBar from './navbar';
import {
    logout,
    login,
    signup,
    clearErrors } from '../../actions/session_actions'

const msp = state => ({
    currentUser: state.entities.users[state.session.currentUser]
})

const mdp = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(NavBar)