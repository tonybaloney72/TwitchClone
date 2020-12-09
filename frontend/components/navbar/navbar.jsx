import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, clearErrors, openModal }) => {

    const logged_out = () => (
        <div className="navbar">
            <div className="navleft">
                {/* <Link className="homebutton" to="/">Home</Link> */}
                <Link className="homebutton" to="/" onClick={clearErrors}><img src={window.images.logo}/></Link>
            </div>
            <div className="navright">
                <button className="sessionbutton" id="login" onClick={() => { clearErrors(); openModal('Log In'); }}>Log In</button>
                <button className="sessionbutton" id="signup" onClick={() => { clearErrors(); openModal('Sign Up'); }}>Sign Up</button>
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
                <button onClick={logout} id="logoutbtn">Log out</button>
            </div>
        </div>
    )
    return currentUser ? logged_in() : logged_out()

}

export default NavBar;

// () => { clearErrors(); openModal(); }