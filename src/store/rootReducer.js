import { combineReducers } from "redux";
import {DiscordReducer} from "./Discord";

export default combineReducers({
    discord: DiscordReducer,
})