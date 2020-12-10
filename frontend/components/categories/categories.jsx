import React from 'react';

class Categories extends React.Component {

    render() {
        return (
            <div>
                {this.props.categories.map((category, idx) => {
                    <Category />
                })}
            </div>
        )
    }
}

export default Categories;