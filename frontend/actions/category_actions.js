import { fetchCategories, fetchCategory } from '../utils/category_api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
})

const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
})

export const getCategories = () => dispatch => (
    fetchCategories()
        .then(categories => dispatch(receiveCategories(categories)))
)

export const getCategory = categoryId => dispatch => (
    fetchCategory(categoryId)
        .then(category => dispatch(receiveCategory(category)))
)