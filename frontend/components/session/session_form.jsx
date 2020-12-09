import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
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
        // .then(() => this.props.history.push('/'));
    }

    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { username: 'SwitchDemoUser', password: '123456' }
        this.props.loginDemoUser(demoUser)
    }

    render() {
        return (
            <div className="session-form">
                {/* <span className="loginlink"><Link to="/login">Log In</Link></span>
                <span className="signuplink"><Link to="/signup">Sign Up</Link></span> */}
                <h3>{this.props.formHeader}</h3>
                {this.props.errors.map( (el, idx) => (
                    <div key={idx}>{el}</div>
                ))}
                <form onSubmit={this.handleSubmit}>
                    {
                        this.props.formType === 'Sign Up' ? (
                            <label><h3>Email:</h3>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput('email')}
                                />
                            </label>
                        ) : null
                    }
                    <label><h3>Username:</h3>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label><h3>Password:</h3>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button className="sessionbutton">{this.props.formType}</button>
                </form>
                <button onClick={this.handleDemoUser} className="sessionbutton">Demo User</button>
            </div>
        );
    }
};

export default SessionForm;