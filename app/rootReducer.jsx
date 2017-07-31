import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as homeReducer, HOME_INITIAL_STATE } from './home/reducer';

export const initialState = {
  home: HOME_INITIAL_STATE,
};

export const rootReducer = combineReducers({
  home: homeReducer,
  routing: routerReducer,
});
