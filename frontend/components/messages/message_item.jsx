import React from 'react';

const MessageItem = props => {
    return (
        <div className="chat-message">
            <span className="chat-text">
                <span className="username">
                    {props.message.user}
                </span>
                <span className="message-body">
                    : {props.message.body}
                </span>
            </span>
        </div>
    )
}

export default MessageItem