import React from 'react';
import ClipItem from './clip_index_item';

class ClipCarousel extends React.Component{

    constructor(props) {
        super(props)

        this.clipsArr = [];
    }

    componentDidMount() {
        let clipsCheck = [];
        let clip;
        console.log(this.props.clips)
        while (this.clipsArr.length < 5) {
            clip = this.props.clips[Math.floor(Math.random()*this.props.clips.length-1)]
            // clip = this.props.clips[0]
            clipsCheck.push(clip)
            if (clip in clipsCheck) {

            } else {
                this.clipsArr.push(clip)
            }
        }
    }

    render() {
        if (this.clipsArr.length === 0) return null;
        return (
            <div className="carousel-wrapper">
                {/* {console.log(this.clipsArr)} */}
                {this.clipsArr.map((clip, idx) => {
                    <div className="carousel-item" key={idx}>
                        <ClipItem clip={clip}/>
                    </div>
                })}
            </div>
        )
    }
}

export default ClipCarousel;