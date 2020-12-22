import React from 'react';

class MessageForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.userId) {
            this.props.openModal('Sign Up')
        } else {
            let data = {
                user_id: this.props.userId,
                clip_id: this.props.match.params.clipId
            }
            App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body, clip_id: data.clip_id, user_id: data.user_id });
            this.setState({body: ''})
        }
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
    }

    render() {
        return (
            <div className="message-form-wrapper">
                <form className="message-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Send a message"
                        value={this.state.body}
                        onChange={this.handleInput('body')}
                    />
                    <button type="submit" className="message-submit">Chat</button>
                </form>
            </div>
        )
    }
}

export default MessageForm;