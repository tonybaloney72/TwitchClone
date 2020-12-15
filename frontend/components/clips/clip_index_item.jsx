import React from 'react';
import { Link } from 'react-router-dom'

const ClipItem = props => (
    <div className="clip-item">
        <Link to={`clips/${props.clip.id}`}>
            <div className="clip">
                {/* <video className="clip-hover" src={props.clip.video_clip}/> */}
            </div>
        </Link>
            <div className="clip-details">
                <div className="clip-channel-image">
                    {/* <img src={getUser(props.clip.user_id).channel_photo} /> */}
                </div>
                <div className="title-link-category">
                <Link to={`clips/${props.clip.id}`}>
                    <h4>{props.clip.title}</h4>
                </Link>
                    <p>{props.clip.category}</p>
                </div>
            </div>
        
    </div>
)

export default ClipItem;