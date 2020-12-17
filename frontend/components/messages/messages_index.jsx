// get all messages related to this clip
// iterate through and display all messages?

import React from 'react';
import MessageItem from './message_item'
// import { clearMessages } from '../../actions/message_actions'

class MessageIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            chat: []
        }
    }

    componentDidMount() {
        this.props.getMessages(this.props.match.params.clipId);
        // this.setState({chat: [...this.state.chat]})
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
        // this.setState({chat: [...this.state.chat]})
    }

    scrollToBottom() {
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        return (
            <div className="chat-messages-display">
                {this.props.messages.map( (message, idx) => (
                    <div key={idx}>
                        <MessageItem message={message}/>
                    </div>
                ))}
                <div ref={el => {this.messagesEnd = el}}>
                </div>
            </div>
        )
    }
}

export default MessageIndex