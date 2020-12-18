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
        if (this.props.userId === null) {
            this.props.openModal('Sign Up')
            this.setState({body: ''})
            e.target.value = ''
        } else {
            let user_id = this.props.userId
            let clip_id = this.props.match.params.clipId
            let body = this.state.body
            let new_obj = {
                user_id,
                clip_id,
                body
            }
            this.props.submitMessage(new_obj)
            this.setState({body: ''})
            e.target.value = ''
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