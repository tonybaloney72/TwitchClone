import React from 'react';

function About() {
    return (
        <div className="about-container">
            <div className="about-me">

            </div>
            <div className="about-links">
                <a href="https://github.com/tonybaloney72"><img className="about-image" src={window.images.ghlogo} alt=""/></a>
                <a href="https://www.linkedin.com/in/anthony-michael-bologna/"><img className="about-image" src={window.images.lilogo} alt=""/></a>
                <a href="https://angel.co/u/anthony-bologna"><img className="about-image" src={window.images.allogo} alt=""/></a>
            </div>
        </div>
    )
}

export default About;