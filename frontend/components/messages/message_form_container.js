import { connect } from 'react-redux'
import MessageForm from './message_form'
import { submitMessage } from '../../actions/message_actions'
import { withRouter }  from 'react-router-dom';

const msp = state => ({
    userId: state.session.currentUser
})

const mdp = dispatch => {
    return ({
        submitMessage: message => dispatch(submitMessage(message))
    })
}

export default withRouter(connect(msp, mdp)(MessageForm))