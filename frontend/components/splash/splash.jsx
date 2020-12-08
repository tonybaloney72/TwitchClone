import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout }) => {
    const generalGreeting = () => (
        <div>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            <h1>Salutations!</h1>
            <h3>Welcome to Switch.tv!</h3>
        </div>
    )

    const userGreeting = () => (
        <div>
            <h1>Well met {currentUser.username}!</h1>
            <h3>content</h3>
            <button onClick={logout}>Log out</button>
        </div>
    )
    
    return currentUser ? userGreeting() : generalGreeting()
}

export default Splash;