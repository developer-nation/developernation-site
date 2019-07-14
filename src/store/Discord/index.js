import { produce } from "immer";
import {DiscordTypes} from "./types";

const INITIAL_STATE = {
    loading: false,
    error: false,
    data: undefined,
};

export const DiscordReducer = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case DiscordTypes.GET_SERVER_INFO.REQUEST:
                draft.loading = true;
                draft.error = false;
                draft.data = undefined;
                break;
            case DiscordTypes.GET_SERVER_INFO.SUCCESS:
                draft.loading = false;
                draft.error = false;
                draft.data = action.payload.data;
                break;
            case DiscordTypes.GET_SERVER_INFO.ERROR:
                draft.loading = false;
                draft.error = true;
                draft.data = action.payload.error;
                break;
            default:
                break;
        }
    });
};