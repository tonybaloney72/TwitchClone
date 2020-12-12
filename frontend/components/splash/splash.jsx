import React from 'react';
import ClipFormContainer from '../clips/clip_form_container';
import { Link } from 'react-router-dom';
import ClipIndexContainer from '../clips/clip_index_container';

const Splash = props => {
    // const generalGreeting = () => (
    //     <div className="greeting">
    //         {/* <Link to="/login">Log In</Link>
    //         <Link to="/signup">Sign Up</Link> */}
    //         <h3>Welcome to Switch.tv!</h3>
    //     </div>
    // )

    // const userGreeting = () => (
    //     <div className="greeting">
    //         {/* <h3>Well met, {currentUser.username}!</h3>
    //         <div><ClipFormContainer /></div> */}

    //     </div>
    // )
    
    // return currentUser ? userGreeting() : generalGreeting()

    return (
        <div className="main-wrapper">
            <ClipIndexContainer />
        </div>
    )
}

export default Splash;