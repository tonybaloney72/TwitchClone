import { connect } from 'react-redux';
import Categories from './categories';

const msp = state => ({
    categories: Object.values(state.entities.categories)
})

// const mdp = dispatch => ({

// })

export default connect(msp, null)(Categories)