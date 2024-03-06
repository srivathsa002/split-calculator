import * as ACTION_TYPES from "../actions/action_types";
import { v4 as uuid } from "uuid";

const initialState = [];

const itemsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ACTION_TYPES.ADD_NEW_ITEM:
            const itemObj = { ...action.payload};
            return [
                ...state,
                {
                    id: uuid(),
                    ...itemObj,
                }
            ];
        case ACTION_TYPES.EDIT_ITEM:
            return state.map((item) => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        name: action.payload.name,
                        cost: action.payload.cost,
                        tax: action.payload.tax,
                        totalCost: action.payload.totalCost,
                        friendsInvolved: [...action.payload.friendsInvolved],
                    }
                };
                return item;
            });
        case ACTION_TYPES.REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload);
        case ACTION_TYPES.FETCH_ITEM:
            return state.filter(item => item.id === action.payload);
        default:
            return state;
    }
}

export default itemsReducer;
