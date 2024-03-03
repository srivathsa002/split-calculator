import { combineReducers } from "redux";
import friendsReducer from "./friends.js";
import itemsReducer from "./items.js";

const rootReducer = combineReducers({
    friends: friendsReducer,
    items: itemsReducer,
})

export default rootReducer;
