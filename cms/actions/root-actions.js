export * from './product-actions';

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function applyRequestFail(error) {
  return {
    type: 'SET_REQUEST_ERROR',
    error
  }
}
