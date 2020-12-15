import React from 'react';
import { Link } from 'react-router-dom'

class Category extends React.Component {

    componentDidMount() {
        this.props.getCategory(this.props.categoryId)
    }

    render() {
        if (this.props.category === undefined) return null;
        return (
            <div className="category-item">
                <div className="category-header">
                    <div className="category-image">
                        <img src={this.props.category.image}/>
                    </div>
                    <div className="category-title">
                        <h3>{this.props.category.title}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
export default Category;