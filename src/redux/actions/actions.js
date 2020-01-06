import {
    ADD_USER,
    SUB_USER,
    ADD_ARTICLE
} from "./actionTypes";


let userId = 0;
export const addUser = name => ({
    type: ADD_USER,
    payload: {
        id: ++ userId,
        name
    }
});
export const subUser = id => ({
    type: SUB_USER,
    payload: {
        id: id,
        // name: `User ${userId}`
    }
});
//
let articleId = 0;
export const addArticle = name => ({
    type: ADD_ARTICLE,
    payload: {
        id: ++ articleId,
        name: name
    }
});

export const subArticle = name => ({
    type: ADD_ARTICLE,
    payload: {
        id: --articleId,
        name: `Article ${articleId}`
    }
});