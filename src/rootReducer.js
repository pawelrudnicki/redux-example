import {combineReducers} from "redux";
import ipReducer from "./ipReducer";

export default combineReducers({
    "ip": ipReducer,
    // "ip2": ipReducer2,
    //...
});