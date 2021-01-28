import React from 'react';
import { connect } from 'react-redux'
import { getUser, updateUser } from '../../actions/user_actions'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            avatarFile: null,
            avatarUrl: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        if (this.state.avatarFile) formData.append('user[channel_photo]', this.state.avatarFile)
        this.props.updateUser(this.props.currentUser, formData)
            .then(() => this.setState({avatarFile: null, avatarUrl: null}))
    }
    
    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({avatarFile: file, avatarUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file)
        }
    }

    render() {
        const preview = () => {
            if (this.state.avatarUrl) {
                return (
                    <div className="avatar-preview-wrapper">
                        <img className="avatar-preview" src={this.state.avatarUrl} />
                    </div>
                )
            } else {
                return null;
            }
        }

        let submitDisable = false
        let submitId = 'submittable'
        if (this.state.avatarFile === null) { 
            submitDisable = true
            submitId = 'not-submittable'
        }

        return (
            <div className="avatar-form-parent">
                <div className="avatar-submit-form">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Change your avatar!</h3>
                        <div className="avatar-preview-box">
                            {preview()}
                        </div>
                        <div className="upload-container">
                            <div className="upload-wrapper">
                                <label htmlFor="file-upload" className="upload-button">
                                    Select Avatar to Upload
                                </label>
                                <input id="file-upload" type="file" onChange={this.handleFile}/>
                            </div>
                        </div>
                        <button className={`avatar-submit ${submitId}`} disabled={submitDisable}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const msp = state => ({
    user: state.entities.users[state.session.currentUser],
    currentUser: state.session.currentUser
})

const mdp = dispatch => ({
    getUser: userId => dispatch(getUser(userId)),
    updateUser: (userId, data) => dispatch(updateUser(userId, data))
})

export default connect(msp, mdp)(Profile)