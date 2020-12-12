import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util'

import Modal from './modal/modal';
import SplashContainer from './splash/splash_container'
import NavBarContainer from './navbar/navbar_container'
import ClipShowContainer from './clips/clip_show_container';
import ClipFormContainer from './clips/clip_form_container';

// change '/upload' to AuthRoute

const App = () => {
    return (
        <div>
            <Modal />
            <NavBarContainer />
            <Switch>
                <Route exact path="/upload" component={ClipFormContainer}/>
                <Route exact path="/clips/:clipId" component={ClipShowContainer} />
                <Route exact path="/" component={SplashContainer}/>
                <Redirect to="/" />
            </Switch>

        </div>
    )
}

export default App;