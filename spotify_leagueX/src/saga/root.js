import { all } from 'redux-saga/effects'
import { SearchWatcher } from './search';
import { EntityListWatcher } from './entity-list';

export function* rootSaga() {
    yield all([
        SearchWatcher(),
        EntityListWatcher()
    ])
}