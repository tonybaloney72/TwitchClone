import React from 'react';
import CategoriesContainer from '../categories/categories_container'

class Directory extends React.Component {

    render() {
        return (
            <div className="directory-wrapper">
                <div className="link-to-other">
                    <button id="categories-button">Categories</button>
                    <button id="channels-button">Channels</button>
                </div>
            </div>
        )
    }
}

export default Directory;