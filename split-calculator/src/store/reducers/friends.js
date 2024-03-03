import * as ACTION_TYPES from "../actions/action_types";
import { v4 as uuid } from "uuid";

const initialState = [];

const friendsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ACTION_TYPES.ADD_NEW_FRIEND:
            return [
                ...state,
                {
                    id: uuid(),
                    name: action.payload,
                    isSelected: false,
                }
            ];
        case ACTION_TYPES.REMOVE_FRIEND:
            return state.filter(friend => friend.id !== action.payload);
        case ACTION_TYPES.ALTER_IS_SELECTED:
            return state.map(friend => {
                if (friend.id === action.payload) {
                    return {
                        ...friend,
                        isSelected: !friend.isSelected,
                    };
                }
                return friend;
            });
        case ACTION_TYPES.RESET_FRIEND_IS_SELECTED:
            return state.map(friend => {
                    return {
                        ...friend,
                        isSelected: false,
                    };
                });
        default:
            return state;
    }
}

export default friendsReducer;
