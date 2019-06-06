let initialState = {};

export default (state=initialState, action) => {
    switch (action.type) {
        case 'GET_ARTIST_ALBUMS_ASYNC':
            state = action.payload;
            return state;
        default:
            return state;
    }
}