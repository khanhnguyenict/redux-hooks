import {
    combineReducers
} from "redux";
import users from './users';
import articles from './articles';
import downloads from "./downloads";
// higher order reducer
const addReducer = (reducer, section) => (state, action) => {
    const { type, payload } = action;
    if (type === `ADD_${section}`) {
        return [...state, payload]
    }
    if (type === `SUB_${section}`) {
        console.log('state1: ', state)
        const data = [...state.filter(item => item.id !== payload.id)];
        console.log('data:', data);
          return data;
      }
    return reducer(state, action);
}

const getReducer = (reducer, section) => (state, action) => {
    const { type, payload } = action;
    if (type === `GET_${section}`) {
        return [...state, payload]
    }
   
    return reducer(state, action);
}


const rootReducer = combineReducers({
    users: addReducer(users, 'USER'),
    articles: addReducer(articles, 'ARTICLE'),
    libraries : getReducer(downloads, '')

})
export default rootReducer;
