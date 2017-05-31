import { fork } from 'redux-saga/effects'

import productListSaga from './product-list-saga'

export default function* rootSaga() {
  yield[
    fork(productListSaga)
  ]
}
