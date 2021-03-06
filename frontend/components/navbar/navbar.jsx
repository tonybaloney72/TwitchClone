import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, clearErrors, openModal, currentUserPic }) => {

    const logged_out = () => (
        <div className="navbar">
            <div className="navleft">
                <Link className="homebutton" to="/" onClick={clearErrors}><img src={window.images.logo}/></Link>
                {/* <Link className="nav-links" to="/directory"><p>Browse</p></Link> */}
                <Link className="nav-links" to="/about"><p>About</p></Link>
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
                <Link className="homebutton" to="/" onClick={clearErrors}><img src={window.images.logo}/></Link>
                {/* <Link className="nav-links" to="/directory"><p>Browse</p></Link> */}
                <Link className="nav-links" to="/about"><p>About</p></Link>
            </div>
            <div className="navright">
                <div className="dropdown">
                    <img className="menu" src={currentUserPic} />
                    <div className="menu-content">
                        <ul>
                            <Link onClick={logout}>
                                <li><i className="fas fa-sign-out-alt fa-flip-horizontal fa-flip-vertical"></i> Log Out</li>
                            </Link>
                            <Link to="/upload">
                                <li>
                                    <i className="fas fa-arrow-circle-up"></i> Upload a Clip</li>
                            </Link>
                            <Link to="/profile">
                                <li>
                                    <i className="fas fa-user-alt"></i> Profile</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
    
    return currentUser ? logged_in() : logged_out()

}

export default NavBar;