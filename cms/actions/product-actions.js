export function setProductPage(page) {
  return {
    type: 'SET_PRODUCT_PAGE',
    page
  }
}


//Saga actions
export function fetchProductPage(page) {
  return {
    type: 'FETCH_PRODUCT_PAGE',
    page
  }
}
