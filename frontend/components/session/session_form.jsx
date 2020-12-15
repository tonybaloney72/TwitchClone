import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            channel_photo: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            .then(this.props.closeModal);
    }

    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { username: 'SwitchDemoUser', password: '123456' }
        this.props.loginDemoUser(demoUser)
            .then(this.props.closeModal)
    }

    displayErrors() {
        if (this.props.errors.length === 0) return null;
        return (
            <div className="session-errors">
                {this.props.errors.map( (el, idx) => (
                    <div key={idx}>{el}</div>
                ))}
            </div>
        )   
    }

    render() {
        return (
            <div className="session-form">
                <div className="modalHeader">
                    <img src={window.images.logo}/>
                    <h3>{this.props.formHeader}</h3>
                </div>
                <div className="link-to-other">
                    {
                        this.props.formType === 'Log In' ? (
                            <div id="modalForm">
                                <button id="selected-form">{this.props.formType}</button>
                                <p>{this.props.otherForm}</p>
                            </div>
                        ) : (
                            <div id="modalForm">
                                <p>{this.props.otherForm}</p>
                                <button id="selected-form-two">{this.props.formType}</button>
                            </div>
                        )
                    }
                </div>
                <form onSubmit={this.handleSubmit}>
                    {this.displayErrors()}
                    {
                        this.props.formType === 'Sign Up' ? (
                            <label><h4>Email</h4>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput('email')}
                                />
                            </label>
                        ) : null
                    }
                    <label><h4>Username</h4>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label><h4>Password</h4>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            id="password"
                        />
                    </label>
                    <button className="sessionbutton">{this.props.formType}</button>
                    <button onClick={this.handleDemoUser} className="sessionbutton">Demo User</button>
                </form>
            </div>
        );
    }
};

export default SessionForm;