import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util'

import Modal from './modal/modal';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import SplashContainer from './splash/splash_container'
import NavBarContainer from './navbar/navbar_container'
import clip_container from './clips/clip_show_container';

const App = () => {
    return (
        <div>
            <Modal />
            <NavBarContainer />
            {/* <AuthRoute path="/signup" component={SignupContainer}/>
            <AuthRoute path="/login" component={LoginContainer}/> */}
            <Route exact path="/clips/:clipId" component={clip_container} />
            <Route exact path="/" component={SplashContainer}/>
        </div>
    )
}

export default App;