import { takeEvery, put } from 'redux-saga/effects';
import genericApiService from '../services/generic-api.service';
import resourceFactoryProvider from '../services/resource-factory-provider';

function *searchWorker(action) {
    let api = resourceFactoryProvider.search;
    const apiWithQuery = api + 
                        '?q=' + action.payload.search_term + 
                        '&type=' + action.payload.search_type;
    const response = yield genericApiService.get(apiWithQuery);
    yield put({ type: 'SEARCH_ASYNC', payload: response })
}

export function *SearchWatcher() {
    yield takeEvery('SEARCH', searchWorker);
}