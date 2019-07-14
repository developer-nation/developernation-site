import { call, put } from 'redux-saga/effects';
import {DiscordTypes} from "./types";
import {DiscordAPI} from "../../services/Discord";
export function* requestDiscordServerInfo(){
    try{
        const response = yield call(DiscordAPI.get, "/guilds/563480013052182539/widget.json");
        yield put({type: DiscordTypes.GET_SERVER_INFO.SUCCESS, payload: { data: response.data }});
    }catch (e) {
        yield put({type: DiscordTypes.GET_SERVER_INFO.ERROR, payload: { error: e}});
    }
}