import { combineReducers } from "redux";
import characterReducer from "./characterReducer";
import currentCharacter from "./currentCharacter";
import quotesReducer from "./quotesReducer";

const ReducerList = combineReducers({
    characterReducer, currentCharacter, quotesReducer
});

export default ReducerList;