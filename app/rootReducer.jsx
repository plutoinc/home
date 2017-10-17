import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as homeReducer, HOME_INITIAL_STATE } from './home/reducer';
import { reducer as newhomeReducer, NEWHOME_INITIAL_STATE } from './newhome/reducer';
import { reducer as localeReducer, LOCALE_INITIAL_STATE } from './components/connectedIntlProvider/reducer';

export const initialState = {
  home: HOME_INITIAL_STATE,
  locale: LOCALE_INITIAL_STATE,
  newhome: NEWHOME_INITIAL_STATE,
};

export const rootReducer = combineReducers({
  home: homeReducer,
  locale: localeReducer,
  newhome: newhomeReducer,
  routing: routerReducer,
});
