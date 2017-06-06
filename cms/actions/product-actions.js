import * as constants from '../constants'

export function setProductPage(page) {
  return {
    type: constants.SET_PRODUCT_PAGE,
    page
  }
}

export function applyProductQuerySuccess(response) {
  return {
    type: constants.PRODUCT_QUERY_SUCCESS,
    response
  }
}


//Saga actions
export function fetchProductPage(page) {
  return {
    type: constants.FETCH_PRODUCT_PAGE,
    page
  }
}

export function executeProductQuery(response) {
  return {
    type: constants.QUERY_PRODUCTS,
    response
  }
}
