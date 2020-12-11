import React from 'react';

class ClipShow extends React.Component {
    
    componentDidMount() {
        this.props.getClip(this.props.clipId)
    }

    render() {
        if (this.props.clip === undefined) return null;
        return (
            <div>
                <h1>Show Page</h1>
                <p>{this.props.clip.title}</p>
                <video className="video" controls src={this.props.clip.video_clip}/>
            </div>
        )
    }
}

export default ClipShow