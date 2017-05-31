import { combineReducers } from 'redux-immutable';
import productList from './product-list-reducer';
import customerList from './customer-list-reducer';
import globalReducer from './global-reducer'

export default combineReducers({
  globalReducer,
  productList,
  customerList
});
