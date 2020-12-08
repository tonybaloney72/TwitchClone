import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout }) => {
    const generalGreeting = () => (
        <div className="greeting">
            {/* <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link> */}
            <h3>Welcome to Switch.tv!</h3>
        </div>
    )

    const userGreeting = () => (
        <div className="greeting">
            <h1>Well met, {currentUser.username}!</h1>
        </div>
    )
    
    return currentUser ? userGreeting() : generalGreeting()
}

export default Splash;