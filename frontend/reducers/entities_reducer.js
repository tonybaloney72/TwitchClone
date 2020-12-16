import { combineReducers } from 'redux';
import users from './users_reducer'
import categories from './categories_reducer'
import clips from './clips_reducer'
import messages from './messages_reducer'

const entitiesReducer = combineReducers({
    users,
    clips,
    categories,
    messages
})

export default entitiesReducer;