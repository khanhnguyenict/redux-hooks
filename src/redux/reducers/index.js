import {
    combineReducers
} from "redux";
import users from './users';
import articles from './articles';
import downloads from "./downloads";

const addReducer = (reducer, section) => (state, action) => {
    const { type, payload } = action;
    if (type === `ADD_${section}`) {
        return [...state, payload]
    }
    if (type === `SUB_${section}`) {
        const data = [...state.filter(item => item.id !== payload.id)];
          return data;
      }
    return reducer(state, action);
}

const getReducer = (reducer, section) => (state, action) => {
    const { type, payload } = action;
    if (type === `GET_${section}`) {
        return [...state, payload]
    }
    if (type === `GET_${section}_SUCCESS`) {
        return [...state, payload]
    }
    return reducer(state, action);
}


const rootReducer = combineReducers({
    users: addReducer(users, 'USER'),
    articles: addReducer(articles, 'ARTICLE'),
    downloads: getReducer(downloads, 'DOWNLOAD')

})
export default rootReducer;
