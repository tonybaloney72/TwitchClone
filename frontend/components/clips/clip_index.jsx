import React from 'react';
import ClipCarousel from './carousel';
import ClipItem from './clip_index_item';

class ClipIndex extends React.Component {
    constructor(props) {
        super(props)

        this.carouselCreate = this.carouselCreate.bind(this)
    }

    componentDidMount() {
        this.props.getClips()
    }

    carouselCreate(clips) {
        if (clips === undefined) {
            return null;
        } else {
            return <ClipCarousel clips={clips} />
        }
    }

    render() {
        if (this.props.clips === undefined) return null;
        return (
            <div className="splash-clips">
                <div className="carousel">
                    {/* {this.props.clips === undefined ? null : <ClipCarousel clips={this.props.clips} />} */}
                    {/* <ClipCarousel clips={this.props.clips} /> */}
                    {this.carouselCreate(this.props.clips)}
                </div>
                <div className="suggestions-wrapper">
                    <h3 id="suggestions">Clips we think you'll like</h3>
                    <div className="clip-index">
                    {this.props.clips.map(clip => (
                        <div className="clip-item-wrapper" key={clip.id} >
                            {/* <ClipItem clip={clip}/> */}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ClipIndex;