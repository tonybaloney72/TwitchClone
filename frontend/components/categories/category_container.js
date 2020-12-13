import { connect } from 'react-redux';
import { getCategory } from '../../actions/category_actions'
import Category from './category';

const msp = (state, ownProps) => ({
    categoryId: ownProps.match.params.categoryId,
    category: state.entities.category[ownProps.match.params.categoryId]
})

const mdp = dispatch => ({
    getCategory: categoryId => dispatch(getCategory(categoryId))
})

export default connect(msp, mdp)(Category)