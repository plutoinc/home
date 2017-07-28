import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export const initialState = {
};

export const rootReducer = combineReducers({
  routing: routerReducer,
});
