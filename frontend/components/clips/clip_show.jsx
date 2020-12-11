import React from 'react';
import { Link } from 'react-router-dom'

class ClipShow extends React.Component {
    
    componentDidMount() {
        this.props.getClip(this.props.clipId)
    }

    render() {
        if (this.props.clip === undefined) return null;
        return (
            <div className="clip-show">
                <video className="video" controls muted src={this.props.clip.video_clip}/>
                <h1 id="left-padding">{this.props.clip.title}</h1>
                <h3 id="left-padding">{this.props.clip.category}</h3>
            </div>
        ) // the h3 will be a <Link /> tag, add autoPlay to <video>
    }
}

export default ClipShow