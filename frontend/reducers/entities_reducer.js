import { combineReducers } from 'redux';
import users from './users_reducer'
import categories from './categories_reducer'
import clips from './clips_reducer'

const entitiesReducer = combineReducers({
    users,
    clips,
    categories
})

export default entitiesReducer;