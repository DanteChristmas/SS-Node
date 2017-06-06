import { takeLatest, call, select, put, fork } from 'redux-saga/effects'

import * as constants from '../constants'
import * as actions from '../actions/root-actions'
import * as ProductRepo from '../repos/ProductRepo'

const getCurrOptions = (state) => state.getIn(['productList', 'currOptions'])

export function* fetchPage(action) {
  yield put.sync(actions.setProductPage(action.page))
  yield* executeQuery()
}

export function* executeQuery(){
  try {
    var opts = yield select(getCurrOptions)
    const response = yield call(ProductRepo.query, opts.toJS())
    yield put(actions.applyProductQuerySuccess(response))
  } catch (e) {
    yield put(actions.applyRequestFail(e))
  }
}

export default function* productListSaga() {
  yield takeLatest(constants.FETCH_PRODUCT_PAGE, fetchPage)
  yield takeLatest(constants.QUERY_PRODUCTS, executeQuery)
}
