import React from 'react';
import MessageIndexContainer from './messages_index_container'
import MessageFormContainer from './message_form_container'

const Chat = () => {
    return(
        <div className="chat-msg-form-container">
            <div className="chat-header">
                <h1>STREAM CHAT</h1>
            </div>
            <div className="chat-messages-display-wrapper">
                <MessageIndexContainer />
            </div>
            {/* <div className="form-display-wrapper">
                <MessageFormContainer />
            </div> */}
        </div>
    )
}

export default Chat