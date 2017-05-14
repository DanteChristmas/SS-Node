import { compose, combineReducers } from 'redux'
import {Map, fromJS} from 'immutable'

// import { isSet } from 'jsUtils/ValidateUtils'

function setState(state, newState) {
  if(newState)
    return state.merge(newState);
  else
    return state;
}

// function setPageState(state, pageState) {
//   pageState = fromJS(pageState)
//   return state.set('pageState', pageState)
// }
//
// function toggleFilter(state, filter, type) {
//   return toggleFilterSelectedFlag(state, filter, type)
// }
//
// function toggleFilterSelectedFlag(state, filter, type) {
//   var index = state.getIn(['data', 'filters']).findIndex((sFilterGroup) => sFilterGroup.get('type') === type)
//   var fIndex = state.getIn(['data', 'filters', index, 'options']).findIndex((sFilter) => sFilter.get('id') === filter.get('id'))
//   var newFlag = state.getIn(['data', 'filters', index, 'options', fIndex, 'isSelected'])
//   return state.setIn(['data', 'filters', index, 'options', fIndex, 'isSelected'], !newFlag)
// }
//
// function toggleFilterView(state) {
//   let filterState = state.getIn(['pageState', 'isFilterOpen'])
//   return state.setIn(['pageState', 'isFilterOpen'], !filterState)
// }
//
// function setStartDate(state, date) {
//   return state.setIn(['pageState', 'currentOptions', 'startDate'], date)
// }
//
// function setEndDate(state, date) {
//   return state.setIn(['pageState', 'currentOptions', 'endDdate'], date)
// }
//
// function toggleLoadingState(state) {
//   let loadingState = state.getIn(['pageState', 'isLoading'])
//   return state.setIn(['pageState', 'isLoading'], !loadingState)
// }
//
// function setCurrentPage(state, page) {
//   return state.setIn(['pageState', 'currentPage'], page)
// }
//
// function incrementCurrentPage(state) {
//   var newPage = state.getIn(['pageState', 'currentPage'])
//   return state.setIn(['pageState', 'currentPage'], ++newPage)
// }
//
// function setHasMore(state, hasMore) {
//   return state.setIn(['pageState', 'hasMore'], hasMore)
// }
//
// function setCurrentOptions(state) {
//   var options = {}
//
//   var filters = state.getIn(['data','filters'])
//   filters.map((filterGroup) =>
//     filterGroup.get('options').map(function (filter) {
//       if(filter.get('isSelected')) {
//         if(isSet(options[filterGroup.get('queryParam')])) {
//           options[filterGroup.get('queryParam')] = options[filterGroup.get('queryParam')] + ',' + filter.get('value')
//         } else {
//           options[filterGroup.get('queryParam')] = filter.get('value')
//         }
//       }
//     }
//   ))
//
//   options.page = state.get('pageState').get('currentPage')
//   options.startDate = isSet(state.get('pageState').getIn(['currentOptions', 'startDate'])) ? state.get('pageState').getIn(['currentOptions', 'startDate']) : null
//   options.endDate = isSet(state.get('pageState').getIn(['currentOptions', 'endDate'])) ? state.get('pageState').getIn(['currentOptions', 'endDate']) : null
//   options.name = isSet(state.get('pageState').getIn(['currentOptions', 'name'])) ? state.get('pageState').getIn(['currentOptions', 'name']) : null
//
//   return state.set('queryOptions', fromJS(options))
// }
//
// function setSearchResults(state, response) {
//   var finalState = state.setIn(['data', 'meta'], fromJS(response.meta))
//   return finalState.setIn(['data', 'schedule'], fromJS(response.content))
// }
//
// function addSearchResults(state, response) {
//   var finalState = state.setIn(['data', 'meta'], fromJS(response.meta))
//   return finalState.updateIn(['data', 'schedule'], (stateData) => stateData.push(...fromJS(response.content)))
// }

export default function productList(state=Map(), action) {
  switch(action.type){
    case 'SET_STATE':
      return setState(state, action.state);
    default: {
      return state;
    }
  }
}
