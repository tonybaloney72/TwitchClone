import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitClip } from '../../actions/clip_actions'
import { getCategories } from '../../actions/category_actions'
import ClipForm from './clip_form';

const msp = state => ({
    userId: state.session.currentUser,
    categories: Object.values(state.entities.categories)
})

const mdp = dispatch => ({
    submitClip: formData => dispatch(submitClip(formData)),
    getCategories: () => dispatch(getCategories())
})

export default withRouter(connect(msp, mdp)(ClipForm))