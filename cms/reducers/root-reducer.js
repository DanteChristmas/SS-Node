import { combineReducers } from 'redux-immutable';
import productList from './product-list-reducer';
import customerList from './customer-list-reducer';

export default combineReducers({
  productList,
  customerList
});
