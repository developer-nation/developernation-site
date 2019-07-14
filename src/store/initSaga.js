import { put } from 'redux-saga/effects';
import {DiscordTypes} from "./Discord/types";

export function* initSaga(){
    yield put({type: DiscordTypes.GET_SERVER_INFO.REQUEST});
}