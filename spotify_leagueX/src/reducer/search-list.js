let initialState = [];

export default (state=initialState, action) => {
    switch (action.type) {
        case 'SEARCH_ASYNC':
            state = action.payload;
            return state;
        default:
            return state;
    }
}