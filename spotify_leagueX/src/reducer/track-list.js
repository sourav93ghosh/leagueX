let initialState = {};

export default (state=initialState, action) => {
    switch (action.type) {
        case 'GET_ALBUM_TRACKS_ASYNC':
            state = action.payload;
            return state;
        default:
            return state;
    }
}