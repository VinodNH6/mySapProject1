import {combineReducers} from 'redux';

import questionsReducer from './questionsReducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

console.log(questionsReducer);

const tescoReducers = combineReducers({
    questions: questionsReducer
});

export default tescoReducers;
