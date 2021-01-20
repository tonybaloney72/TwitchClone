import React from 'react';

function About() {
    return (
        <div className="about-container">
            <div className="about-me">
                <div className="about-me-photo-wrapper">
                    <img className="photo" src={window.images.anthony} alt=""/>
                </div>
                <div className="about-me-name">
                    <h3 className="name">Anthony Bologna</h3>
                    <p>Full Stack Software Engineer</p>
                    <p>Gamer</p>
                    <p>Self-proclaimed pizzaiolo</p>
                    <p>Breakfast enthusiast</p>
                </div>
            </div>
            <div className="about-links">
                <a href="https://github.com/tonybaloney72" target="_blank" rel="noreferrer"><img className="about-image" src={window.images.ghlogo} alt=""/></a>
                <a href="https://www.linkedin.com/in/anthony-michael-bologna/" target="_blank" rel="noreferrer"><img className="about-image" src={window.images.lilogo} alt=""/></a>
                <a href="https://angel.co/u/anthony-bologna" target="_blank" rel="noreferrer"><img className="about-image" src={window.images.allogo} alt=""/></a>
            </div>
        </div>
    )
}

export default About;