import React from 'react';
import CarouselItem from './carousel_item';

class ClipCarousel extends React.Component{

    constructor(props) {
        super(props)
        this.clipsArr = [];
    }

    getClips() {
        let clip;
        while (this.clipsArr.length < 5 && this.props.clips.length > 0) {
            clip = this.props.clips[Math.floor(Math.random()*this.props.clips.length)]
            if (clip in this.clipsArr) {
                
            } else {
                this.clipsArr.push(clip)
            }
        }
    }

    render() {
        this.getClips();
        if (this.clipsArr.length === 0) return null;
        return (
            <div className="carousel-wrapper">
                {this.clipsArr.map( clip => (
                    <CarouselItem clip={clip} key={clip.id}/>
                ))}
            </div>
        )
    }
}

export default ClipCarousel;