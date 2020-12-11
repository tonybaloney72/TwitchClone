import React from 'react';

class ClipForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = this.props.//something??
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        return null;
    }
    
    handleInput(field) {
        return e => this.setState({ [field]: e.target.value})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit()}>
                    <h3>Add a clip to your channel!</h3>
                    <label>Title
                        <input
                            type="text"
                            value={} //! this.state.title?
                            onChange={this.handleInput}
                        />
                    </label>
                    <label>Select a file
                        <input type="file" />
                    </label>
                    <label>Category
                        <input
                            type="selection"
                            value={} //!this.state.category
                            onChange={}
                        />
                    </label>
                    <button>Submit</button>
                    {/* disable button */}
                </form>
            </div>
        )
    }
}

export default ClipForm;