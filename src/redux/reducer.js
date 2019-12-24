const initialState = {
    num: 0,
    isloading: true
}

function countReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            const dataIncrement = {
                ...state,
                num: 0,
                isloading: true
            }
            return dataIncrement;
        case 'INCREMENT_SUCCESS':
            const dataDecrement = {
                ...state,
                num:  action.step,
                isloading: false
            }
            return dataDecrement;
        default:
            return state;
    }
}

export default countReducer;