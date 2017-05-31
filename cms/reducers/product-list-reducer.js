import { compose, combineReducers } from 'redux'
import {Map, fromJS} from 'immutable'

function setPage(state, page) {
  return state.setIn(['currOptions', 'page'], page)
}

function setSearchResults(state, response) {
  var finalState = state.set('products', fromJS(response.content))
  return finalState.set('meta', fromJS(response.meta))
}

export default function productList(state=Map(), action) {
  switch(action.type){
    case 'SET_PRODUCT_PAGE':
      return setPage(state, action.page);
    case 'PRODUCT_QUERY_SUCCESS':
      return setSearchResults(state, action.response)
    default: {
      return state;
    }
  }
}
