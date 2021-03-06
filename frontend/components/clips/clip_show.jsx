import React from 'react';
import ChatRoom from '../messages/chat_room'

class ClipShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            category: null
        }
    }
    
    componentDidMount() {
        this.props.getCategories().then(res => this.setState({category: res}))
        this.props.getClip(this.props.clipId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.clipId !== this.props.clipId) {
            this.props.getClip(this.props.clipId)
        }
    }

    removeClip() {
        this.props.deleteClip(this.props.clip.id)
            .then(this.props.history.push('/'))
    }

    render() {
        if (this.props.clip === undefined) return null;
        return (
            <div className="clip-chat-wrapper">
                <div className="clip-show">
                    <div className="video-black-background">
                        <video className="video" type="video/mp4" controls muted src={this.props.clip.video_clip}/>
                    </div>
                    <div className="information">
                        <div className="info-margin">
                            <div className="left-side">
                                <div className="clip-channel-image">
                                    <img src={this.props.clip.channel_photo}/>
                                </div>
                                <div className="clip-details">
                                    <h1 id="left-padding">{this.props.clip.title}</h1>
                                    <h4 id="left-padding">{this.props.clip.username}</h4>
                                    <h3 id="left-padding">{this.props.clip.category}</h3>
                                </div>
                            </div>
                            <div className="right-side">
                                {
                                    this.props.currentUser === this.props.clip.user_id ? (
                                        <div>
                                            <button className="delete-button" onClick={() => this.removeClip()}>Delete Clip</button>
                                        </div>
                                    ) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-show">
                    <ChatRoom clipId={this.props.clipId}/>
                </div>
            </div>
        )
    }
}

export default ClipShow