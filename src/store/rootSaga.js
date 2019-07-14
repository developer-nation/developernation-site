import { all, takeLatest, fork } from 'redux-saga/effects';
import {requestDiscordServerInfo} from "./Discord/sagas";
import {DiscordTypes} from "./Discord/types";
import {initSaga} from "./initSaga";

export default function* rootSaga() {
    yield fork(initSaga);
    return yield all([
        takeLatest(DiscordTypes.GET_SERVER_INFO.REQUEST, requestDiscordServerInfo),
    ]);
}
