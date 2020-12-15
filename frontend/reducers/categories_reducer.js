import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions'

const CategoriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)

    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories
        case RECEIVE_CATEGORY:
            return Object.assign(newState, {[action.category.id]: action.category})
        default:
            return oldState
    }
}

export default CategoriesReducer;