import React from 'react';

class Categories extends React.Component {

    //constructor?

    //componentdidmount?

    render() {
        return (
            <div>
                {this.props.categories.map(category => {
                    <Category /> //link to <Category/>?
                })}
            </div>
        )
    }
}

export default Categories;