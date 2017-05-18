export * from './product-actions';


// export function setProductPage(page) {
//   return {
//     type: 'SET_PRODUCT_PAGE',
//     page
//   }
// }

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}
