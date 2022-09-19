import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";

const reducers = combineReducers({
  contador: contadorReducer,
});

export default reducers;
