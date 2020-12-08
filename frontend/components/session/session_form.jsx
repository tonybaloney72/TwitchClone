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
    }

    render() {
        return (
            <div className="session-form">
                <Link to="/">Home</Link>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
                <h1>{this.props.formHeader}</h1>
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
                    <button>{this.props.formType}</button>
                </form>
            </div>
        );
    }
};

export default SessionForm;