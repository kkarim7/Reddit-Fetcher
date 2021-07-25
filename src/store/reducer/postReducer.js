const initialState = {
    posts: null,
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETDATA":
            return {...state, posts: action.payload}
        default: 
        return state;
    }
}

export default postReducer;