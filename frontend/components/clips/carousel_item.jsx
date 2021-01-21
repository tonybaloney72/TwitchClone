import React from 'react';
import { Link } from 'react-router-dom'

const CarouselItem = props => (
    <div className="carousel-item">
        <div className="carousel-video">
            <video className="carousel-video-player" type="video/mp4" src={props.clip.video_clip} controls muted/>
        </div>
        <div className="carousel-description">
            <div className="carousel-picture-username">
                <div className="carousel-picture">

                </div>
                <div className="carousel-username">

                </div>
            </div>
        </div>
        {/* <Link to={`clips/${props.clip.id}`}>
            <div className="clip">
                <video className="clip-hover" type="video/mp4" src={props.clip.video_clip}/>
            </div>
        </Link>
            <div className="clip-details">
                <div className="clip-channel-image">
                    <img src={props.clip.channel_photo}/>
                </div>
                <div className="title-link-category">
                <Link to={`clips/${props.clip.id}`}>
                    <h4>{props.clip.title}</h4>
                </Link>
                    <h5>{props.clip.username}</h5>
                    <p>{props.clip.category}</p>
                </div>
            </div> */}
    </div>
)

export default CarouselItem;