import { connect } from 'react-redux';
import { withRouter }  from 'react-router-dom';
import MessagesIndex from './messages_index'
import { getMessages, clearMessages } from '../../actions/message_actions'

const msp = state => {
    return ({
        messages: Object.values(state.entities.messages),
        userId: state.session.currentUser
    })
}

const mdp = dispatch => ({
    getMessages: clipId => dispatch(getMessages(clipId)),
    clearMessages: () => dispatch(clearMessages)
})

export default withRouter(connect(msp, mdp)(MessagesIndex))