import React from 'react';
import Category from './category';

class Categories extends React.Component {

    //constructor?

    componentDidMount() {
        this.props.getCategories()
    }

    render() {
        if (this.props.categories === undefined) return null;
        return (
            <div>
                {this.props.categories.map(category => {
                    <Category category={category}/>
                })}
            </div>
        )
    }
}

export default Categories;