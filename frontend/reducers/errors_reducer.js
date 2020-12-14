import { combineReducers } from 'redux';
import clipErrorsReducer from './clips_errors_reducer';
import sessionErrorReducer from './session_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorReducer,
    clip: clipErrorsReducer
});

export default errorsReducer;