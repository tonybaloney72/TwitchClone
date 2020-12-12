import React from 'react';
import { Link } from 'react-router-dom'

const ClipItem = props => (
    <div className="clip-item">
        <Link to={`clips/${props.clip.id}`}>
            <div className="clip">
                <video className="clip-hover" src={props.clip.video_clip}/>
            </div>
            <h4>{props.clip.title}</h4>
        </Link>
    </div>
)

export default ClipItem;