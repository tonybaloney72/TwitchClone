import React from 'react';
import { Link } from 'react-router-dom'

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

    removeClip() {
        this.props.deleteClip(this.props.clip.id)
    }

    getCat() {
        if (!this.state.category) {
            return null
         } else {
            return (
                <div className="category-link">
                    <Link to={`/categories/${this.props.clip.category}`}><h3 id="left-padding">{this.state.category.categories[this.props.clip.category].title}</h3></Link>
                </div>
            )
         }
    }

    render() {
        if (this.props.clip === undefined) return null;
        // debugger
        return (
            <div className="clip-show">
                {/* <video className="video" controls muted src={this.props.clip.video_clip}/> */}
                <div className="information">
                    <div className="left-side">
                        <h1 id="left-padding">{this.props.clip.title}</h1>
                        {this.getCat()}
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
        ) // the h3 category will be a <Link /> tag
    }
}

export default ClipShow