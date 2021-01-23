import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import CarouselItem from './carousel_item';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

class ClipCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      direction: '',
    };

    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  getClips() {
    var clips = [];
    var level;

    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i;

      if (i < 0) {
        index = this.props.clips.length + i;
      } else if (i >= this.props.clips.length) {
        index = i % this.props.clips.length;
      }

      if (this.props.clips.length === 1) {
        level = 0;
      } else if (this.props.clips.length <= 3) {
        level = this.state.active - i + 1;
      } else {
        level = this.state.active - i;
      }

      clips.push(
        <CarouselItem
          key={index}
          clip={this.props.clips[index]}
          level={level}
        />
      );
    }

    return clips;
  }

  renderLeftArrow() {
    if (this.props.clips.length > 1) {
      return (
        <div className="arrow arrow-left pointer" onClick={this.leftClick}>
          <AiOutlineArrowLeft />
        </div>
      );
    }
  }

  renderRightArrow() {
    if (this.props.clips.length > 1) {
      return (
        <div className="arrow arrow-right pointer" onClick={this.rightClick}>
          <AiOutlineArrowRight />
        </div>
      );
    }
  }

  moveLeft() {
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.props.clips.length - 1 : newActive,
      direction: 'left',
    });
  }

  moveRight() {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.props.clips.length,
      direction: 'right',
    });
  }

  render() {
    return (
      <>
        <div className="featured-section">
          <h3 className="featured">Featured</h3>
        </div>
        <div id="clip-carousel" className="noselect">
          {this.renderLeftArrow()}
          <CSSTransitionGroup
            transitionName={this.state.direction}
            transitionEnterTimeout={100}
            transitionLeaveTimeout={100}
          >
            {this.getClips()}
          </CSSTransitionGroup>
          {this.renderRightArrow()}
        </div>
      </>
    );
  }
}
export default ClipCarousel;