import React from 'react';
import { Link } from 'react-router-dom'

const ClipItem = props => (
    <div className="clip-item">
        <Link to={`clips/${props.clip.id}`}>
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
            </div>
    </div>
)

export default ClipItem;