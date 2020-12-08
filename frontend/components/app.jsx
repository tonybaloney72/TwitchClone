import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import SplashContainer from './splash/splash_container'

const App = () => {
    return (
        <div>
            <Route path="/signup" component={SignupContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route exact path="/" component={SplashContainer}/>
        </div>
    )
}

export default App;