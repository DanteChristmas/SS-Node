import { take, call, select, put, fork } from 'redux-saga/effects'

// import * as actions from 'jsActions/schedule-actions'
// import EventRepo from 'jsRepos/EventRepo'

// const getQueryOptions = (state) => state.get('queryOptions')

// export function* applySearch() {
//   while(true) {
//     const action = yield take('APPLY_SEARCH')
//     yield put.sync(actions.toggleLoadingState())
//     yield put.sync(actions.setCurrentPage(1))
//     yield put.sync(actions.setCurrentOptions())
//     try {
//       const myOptions = yield select(getQueryOptions)
//       const response = yield call(_events.all, myOptions.toJS())
//       yield put(actions.applySearchSuccess(response))
//     } catch (e) {
//       yield put(actions.applySearchFailure(e))
//     }
//     yield put.sync(actions.toggleLoadingState())
//   }
// }
//
// export function* requestMoreEvents() {
//   while(true) {
//     const action = yield take('REQUEST_MORE_EVENTS')
//     yield put.sync(actions.toggleLoadingState())
//     yield put.sync(actions.incrementCurrentPage())
//     yield put.sync(actions.setCurrentOptions())
//     try {
//       const myOptions = yield select(getQueryOptions)
//       const response = yield call(_events.all, myOptions.toJS())
//       yield put(actions.requestMoreSuccess(response))
//     } catch (e) {
//       yield put(actions.requestMoreFail(e))
//     }
//     yield put.sync(actions.toggleLoadingState())
//   }
// }

export default function* rootSaga() {
  yield[
    // fork(applySearch),
    // fork(requestMoreEvents)
  ]
}
