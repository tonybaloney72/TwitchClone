import { connect } from 'react-redux'
import MessageForm from './message_form'
import { submitMessage } from '../../actions/message_actions'

const msp = (state, ownProps) => ({
    userId: state.session.currentUser,
    clipId: ownProps.match.params.clipId
})

const mdp = dispatch => ({
    submitMessage: message => dispatch(submitMessage(message))
})

export default connect(msp, mdp)(MessageForm)