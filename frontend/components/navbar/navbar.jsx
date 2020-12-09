import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, clearErrors }) => {
    
    const logged_out = () => (
        <div className="navbar">
            <div className="navleft">
                {/* <Link className="homebutton" to="/">Home</Link> */}
                <Link className="homebutton" to="/" onClick={clearErrors}><img src={window.images.logo}/></Link>
            </div>
            <div className="navright">
                <Link className="sessionbutton" id="login" to="/login" onClick={clearErrors}>Log In</Link>
                <Link className="sessionbutton" id="signup" to="/signup" onClick={clearErrors}>Sign Up</Link>
            </div>
        </div>
    )

    const logged_in = () => (
        <div className="navbar">
            <div className="navleft">
                {/* <Link className="homebutton" to="/">Home</Link> */}
                <Link className="homebutton" to="/" onClick={clearErrors}><img src={window.images.logo}/></Link>
            </div>
            <div className="navright">
                <button onClick={logout}>Log out</button>
            </div>
        </div>
    )
    return currentUser ? logged_in() : logged_out()

}

export default NavBar;