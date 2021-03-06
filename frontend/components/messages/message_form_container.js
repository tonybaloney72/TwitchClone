import { connect } from 'react-redux'
import MessageForm from './message_form'
import { submitMessage } from '../../actions/message_actions'
import { openModal } from '../../actions/modal_actions';
import { withRouter }  from 'react-router-dom';

const msp = state => ({
    userId: state.session.currentUser,
    currentUser: state.entities.users[state.session.currentUser]
})

const mdp = dispatch => {
    return ({
        submitMessage: message => dispatch(submitMessage(message)),
        openModal: modal => dispatch(openModal(modal))
    })
}

export default withRouter(connect(msp, mdp)(MessageForm))