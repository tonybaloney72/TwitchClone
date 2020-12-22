import React from "react";
import MessageFormContainer from "./message_form_container";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }
  
  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: this.props.clipId },
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat([data])
          });
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );
  }
  
  render() {
    const messageList = this.state.messages.map( (message, idx) => {
      return (
        <div key={idx}>
          <div className="chat-message">
            <span className="chat-text">
                <span className="username">
                    {message.username}
                </span>
                <span className="message-body">
                    : {message.message}
                </span>
            </span>
          </div>
          <div ref={this.bottom}></div>
        </div>
      );
    });
    return (
      <div className="chat-msg-form-container">
          <div className="chat-header">
            <h1>STREAM CHAT</h1>
          </div>
        <div className="chat-messages-display-wrapper">
          <div className="chat-messages-display">
            {messageList}
          </div>
        </div>
        <div className="form-display-wrapper">
            <MessageFormContainer />
        </div>
      </div>
    );
  }
}

export default ChatRoom;