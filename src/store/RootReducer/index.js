import { combineReducers } from "redux";
import homeReducer from "../Services/User/GetListUserService";

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
