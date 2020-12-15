import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util'

import Modal from './modal/modal';
import SplashContainer from './splash/splash_container'
import NavBarContainer from './navbar/navbar_container'
import ClipShowContainer from './clips/clip_show_container';
import ClipFormContainer from './clips/clip_form_container';
import CategoryContainer from './categories/category_container'
import Directory from './directory/directory'

// change '/upload' to AuthRoute

const App = () => {
    return (
        <div>
            <Modal />
            <NavBarContainer />
            <Switch>
                <ProtectedRoute exact path="/upload" component={ClipFormContainer}/>
                <Route exact path="/clips/:clipId" component={ClipShowContainer} />
                <Route exact path="/categories/:categoryId" component={CategoryContainer} />
                <Route exact path="/directory" component={Directory}/>
                <Route exact path="/" component={SplashContainer}/>
                <Redirect to="/" />
            </Switch>

        </div>
    )
}

export default App;