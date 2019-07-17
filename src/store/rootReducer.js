import { combineReducers } from "redux";
import {DiscordReducer} from "./Discord";
import { connectRouter } from "connected-react-router";

export const createReducer = history => {
    return combineReducers({
        router: connectRouter(history),
        discord: DiscordReducer,
    })
};