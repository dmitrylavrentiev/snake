import { combineReducers } from "redux";

import { reducerField } from "./reducerField";

export const rootReducer = combineReducers({
    fieldStore: reducerField
})