import * as constants from '../constants'

export * from './product-actions'
export * from './product-validations'

export function setState(state) {
  return {
    type: constants.SET_STATE,
    state
  }
}

export function applyRequestFail(error) {
  return {
    type: constants.SET_REQUEST_ERROR,
    error
  }
}
