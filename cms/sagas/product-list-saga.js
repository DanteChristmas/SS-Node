import { takeLatest, call, select, put, fork } from 'redux-saga/effects'

import * as actions from '../actions/root-actions';

export function* fetchPage(action) {
  yield put.sync(actions.setProductPage(action.page))
}

export default function* productListSaga() {
  yield takeLatest("FETCH_PRODUCT_PAGE", fetchPage);
}
