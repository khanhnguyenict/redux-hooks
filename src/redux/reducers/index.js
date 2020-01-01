import {
    combineReducers
} from "redux";
import users from './users';
import articles from './articles';

const addReducer = (reducer, section) => (state, action) => {
    if (action.type === `ADD_${section}`) {
        return [...state, action.payload]
    }
    return reducer(state, action);
}




const rootReducer = combineReducers({
    users: addReducer(users, 'USER'),
    articles: addReducer(articles, 'ARTICLE')

})
export default rootReducer;