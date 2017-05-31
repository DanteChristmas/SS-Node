export function setProductPage(page) {
  return {
    type: 'SET_PRODUCT_PAGE',
    page
  }
}

export function applyProductQuerySuccess(response) {
  return {
    type: 'PRODUCT_QUERY_SUCCESS',
    response
  }
}


//Saga actions
export function fetchProductPage(page) {
  return {
    type: 'FETCH_PRODUCT_PAGE',
    page
  }
}

export function executeProductQuery(response) {
  return {
    type: 'EXECUTE_PRODUCT_QUERY',
    response
  }
}
