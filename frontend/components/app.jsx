import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../utils/route_util'

import Modal from './modal/modal';
import SplashContainer from './splash/splash_container'
import NavBarContainer from './navbar/navbar_container'
import ClipShowContainer from './clips/clip_show_container';
import ClipFormContainer from './clips/clip_form_container';
import CategoryContainer from './categories/category_container'
import Directory from './directory/directory'
import About from './about/about'
import Profile from './profile/profile';

const App = () => {
    return (
        <div>
            <Modal />
            <NavBarContainer />
            <Switch>
                <ProtectedRoute exact path="/profile" component={Profile} />
                <ProtectedRoute exact path="/upload" component={ClipFormContainer}/>
                <Route exact path="/clips/:clipId" component={ClipShowContainer} />
                <Route exact path="/categories/:categoryId" component={CategoryContainer} />
                <Route exact path="/directory" component={Directory}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/" component={SplashContainer}/>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default App;