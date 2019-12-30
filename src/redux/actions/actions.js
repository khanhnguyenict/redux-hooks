import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    ADD_USER,
    ADD_ARTICLE
} from "./actionTypes";


let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
});
export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {
        filter
    }
})
//

let userId = 0;
export const addUser = name => ({
    type: ADD_USER,
    payload: {
        id: ++userId,
        name: `User ${userId}`
    }
});
//
let articleId = 0;
export const addArticle = name => ({
    type: ADD_ARTICLE,
    payload: {
        id: ++articleId,
        name: `Article ${articleId}`
    }
});