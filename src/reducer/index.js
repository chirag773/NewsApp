import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import newsReducer from "./newsReducer";
import addFavReducer from "./addFavReducer";

export default combineReducers({
  errors:errorReducer,
  news:newsReducer,
  favNews:addFavReducer
})