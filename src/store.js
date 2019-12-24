const initialState = {
    num: 0,
    isloading: true
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            const dataIncrement = {
                ...state,
                num: state.num + action.step,
                isloading: false
            }
            return dataIncrement;
        case 'DECREMENT':
            const dataDecrement = {
                ...state,
                num: state.num - action.step,
                isloading: false
            }
            return dataDecrement;
        default:
            return state;
    }
}

export default reducer;