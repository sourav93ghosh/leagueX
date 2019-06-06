import { combineReducers } from 'redux';
import listOfArtist from './search-list';
import listOfAlbums from './album-list';
import listOfTracks from './track-list';

const appReducer = combineReducers({
    listOfArtist,
    listOfAlbums,
    listOfTracks
});

const initialState = appReducer([], {}, {});

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = initialState;
    }
    return appReducer(state, action);
}

export default rootReducer;