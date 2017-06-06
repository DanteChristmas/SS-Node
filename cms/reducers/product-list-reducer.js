import {Map, fromJS} from 'immutable'

import * as constants from '../constants'

function setPage(state, page) {
  return state.setIn(['currOptions', 'page'], page)
}

function setSearchResults(state, response) {
  var finalState = state.set('products', fromJS(response.content))
  return finalState.set('meta', fromJS(response.meta))
}

export default function productList(state=Map(), action) {
  switch(action.type){
    case constants.SET_PRODUCT_PAGE:
      return setPage(state, action.page);
    case constants.PRODUCT_QUERY_SUCCESS:
      return setSearchResults(state, action.response)
    default: {
      return state;
    }
  }
}
