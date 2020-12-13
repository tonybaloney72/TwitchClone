import React from 'react';

class ClipForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            category: '',
            clipFile: null,
            userId: props.userId,
            clipURL: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('clip[title]', this.state.title);
        formData.append('clip[userId]', this.state.userId);
        formData.append('clip[category]', this.state.category);
        formData.append('clip[video_clip]', this.state.clipFile);
        this.props.submitClip(formData)
            .then(response => {
                (this.props.history.push(`/clips/${response.clip.id}`))
            }
        )
    }
    
    handleInput(field) {
        return e => this.setState({ [field]: e.target.value})
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => (
            this.setState({clipFile: file, clipURL: fileReader.result})
        );
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
    
    render() {
        const preview = () => {
            if (this.state.clipURL) {
                return (
                    <div className="clip-preview">
                        <h3>Clip Preview</h3>
                        <video controls muted src={this.state.clipURL}/>
                    </div>
                )
            } else {
                return <h3 className="clip-preview">Preivew your clip here before submitting</h3>;
            }
        }
        return (
            <div className = "submit-form-parent">
                <div className="clip-submit-form">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Add a clip to your channel!</h3>
                        <label><h4>Title</h4>
                            <input id="text"
                                type="text"
                                value={this.state.title} //! this.state.title?
                                onChange={this.handleInput('title')}
                            />
                        </label>
                        <label><h4>Category</h4>
                            <select
                                value={this.state.category} //!this.state.category
                                onChange={this.handleInput('category')}
                            />
                        </label>
                        <div className="upload-container">
                            <div className="upload-wrapper">
                                <label htmlFor="file-upload" className="upload-button">
                                    Upload a clip
                                </label>
                                <input id="file-upload" type="file" onChange={this.handleFile}/>
                            </div>
                        </div>
                        <button id="clip-submit">Submit</button>
                    </form>
                </div>
                <div className="preview-box">
                    {preview()}
                </div>
            </div>
        )
    }
}

export default ClipForm;