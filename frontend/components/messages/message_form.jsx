import React from 'react';

class MessageForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            user_id: props.userId,
            clip_id: props.match.params.clipId
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.currentUser === undefined) {
            return null
        } else {
            this.setState({user_id: this.props.currentUser.id})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.userId === null) {
            this.props.openModal('Sign Up')
            this.setState({body: ''})
            e.target.value = ''
        } else {
            this.props.submitMessage(this.state)
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