import React from 'react';
import ClipItem from './clip_index_item';

class ClipIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            category: null
        }
    }

    componentDidMount() {
        this.props.getClips()
    }

    render() {
        if (this.props.clips === undefined) return null;
        return (
            <div className="suggestions-wrapper">
                <h3 id="suggestions">Clips we think you'll like</h3>
                <div className="clip-index">
                {this.props.clips.map(clip => (
                    <div className="clip-item-wrapper" key={clip.id} >
                        <ClipItem clip={clip}/>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default ClipIndex;