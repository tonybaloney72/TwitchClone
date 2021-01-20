import React from 'react';
import ClipFormContainer from '../clips/clip_form_container';
import { Link } from 'react-router-dom';
import ClipIndexContainer from '../clips/clip_index_container';
import CarouselContainr from '../carousel/carousel_container';

const Splash = props => {
    return (
        <div className="main-wrapper">
            <CarouselContainr />
            <ClipIndexContainer />
        </div>
    )
}

export default Splash;