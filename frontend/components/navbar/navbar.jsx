import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    
    const logged_out = () => (
        <div>
            <Link className="homebutton" to="/">Home</Link>
            <Link className="sessionbutton" to="/login">Log In</Link>
            <Link className="sessionbutton" to="/signup">Sign Up</Link>
        </div>
    )

    const logged_in = () => (
        <div>
            <Link className="homebutton" to="/">Home</Link>
            <button onClick={logout}>Log out</button>
        </div>
    )

    return currentUser ? logged_in() : logged_out()

}

export default NavBar;