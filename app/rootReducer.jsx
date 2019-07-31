import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as homeReducer, HOME_INITIAL_STATE } from "./home/reducer";
import {
  reducer as localeReducer,
  LOCALE_INITIAL_STATE
} from "./components/connectedIntlProvider/reducer";

export const initialState = {
  locale: LOCALE_INITIAL_STATE,
  home: HOME_INITIAL_STATE
};

export const rootReducer = combineReducers({
  locale: localeReducer,
  home: homeReducer,
  routing: routerReducer
});
