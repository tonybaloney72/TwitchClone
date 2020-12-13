import { connect } from 'react-redux';
import { getCategories } from '../../actions/category_actions'
import Categories from './categories';

const msp = state => ({
    categories: Object.values(state.entities.categories)
})

const mdp = dispatch => ({
    getCategories: () => dispatch(getCategories())
})

export default connect(msp, null)(Categories)