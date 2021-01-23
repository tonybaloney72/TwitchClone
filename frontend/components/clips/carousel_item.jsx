import React, { Component } from 'react';
import { withRouter } from 'react-router';

class CarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
      hovered: false,
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  generateTitle() {
    const title = this.props.clip.title;

    if (title.length < 14) {
      return title;
    } else {
      return title.slice(0, 14) + '...';
    }
  }

  handleHover() {
    this.setState((prevState) => ({
      hovered: !prevState.hovered,
    }));
  }

  handleClick() {
    this.props.history.push(`/clip/${this.props.clip.id}`);
  }

  render() {
    if (!this.props.clip) return null;

    const className =
      'clip-carousel-item level' +
      this.props.level +
      (this.state.hovered ? ' hovered pointer' : '');
    return (
      <div
        className={className}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onClick={this.handleClick}
      >
        <div className="carousel-video">
            <video className="carousel-video-player" id={`${this.props.clip.id}`} type="video/mp4" src={this.props.clip.video_clip} controls muted autoPlay={this.props.clip.autoplay}/>
        </div>
        <div className="carousel-description">
            <div className="carousel-description-inner">
                <div className="carousel-picture-username">
                    <div className="carousel-picture">
                        <img src={this.props.clip.channel_photo} className="carousel-channel-photo" />
                    </div>
                    <div className="carousel-username">
                        <h1>{this.props.clip.username}</h1>
                        <h1>{this.props.clip.title}</h1>
                        <h1>{this.props.clip.category}</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CarouselItem);