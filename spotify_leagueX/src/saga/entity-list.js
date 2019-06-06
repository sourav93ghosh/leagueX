import { takeEvery, put } from 'redux-saga/effects';
import genericApiService from '../services/generic-api.service';
import resourceFactoryProvider from '../services/resource-factory-provider';

function *getAlbumsByArtistId(action) {
    const artist_id = action.payload;
    const api = `${resourceFactoryProvider.artists}/${artist_id}/albums`;
    const response = yield genericApiService.get(api);
    yield put({ type: 'GET_ARTIST_ALBUMS_ASYNC', payload: response });
}

function *getTracksByAlbumId(action) {
    const album_id = action.payload;
    const api = `${resourceFactoryProvider.albums}/${album_id}/tracks`;
    const response = yield genericApiService.get(api);
    yield put({ type: 'GET_ALBUM_TRACKS_ASYNC', payload: response });
}

export function *EntityListWatcher() {
    yield takeEvery('GET_ARTIST_ALBUMS', getAlbumsByArtistId);
    yield takeEvery('GET_ALBUM_TRACKS', getTracksByAlbumId);
}