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
                <div className="modalHeader">
                    <img src={window.images.logo}/>
                    <h3>{this.props.formHeader}</h3>
                </div>
                <div className="session-errors">
                    {this.props.errors.map( (el, idx) => (
                        <div key={idx}>{el}</div>
                    ))}
                </div>
                <form onSubmit={this.handleSubmit}>
                    {
                        this.props.formType === 'Sign Up' ? (
                            <label><h4>Email:</h4>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput('email')}
                                />
                            </label>
                        ) : null
                    }
                    <label><h4>Username:</h4>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label><h4>Password:</h4>
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