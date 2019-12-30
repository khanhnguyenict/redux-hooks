
  


export default (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        // case "ADD_USER":
        //     return [...state, {
        //         id: payload.id,
        //         name: payload.name
        //     }]
        default:
            return state;
    }
}