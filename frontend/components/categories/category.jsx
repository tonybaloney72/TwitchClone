import React from 'react';
import { Link } from 'react-router-dom'

const Category = props => (
    <div className="category-item">
        <Link to="">
        <div className="category-image">
            <img src={props.category.image}/>
        </div>
        </Link>
        <Link to="">
        <div className="category-title">
            <h3>{props.category.title}</h3>
        </div>
        </Link>
    </div>
)

export default Category;