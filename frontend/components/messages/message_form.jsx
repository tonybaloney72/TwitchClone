import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            user_id: props.userId,
            clip_id: props.clipId
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitClip()
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
    }
    
    componentDidMount() {

    }

    render() {
        <div className="message-form-wrapper">
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.body}
                    onChange={this.handleInput('title')}
                />
                <button className="message-submit">Chat</button>
            </form>
        </div>
    }
}