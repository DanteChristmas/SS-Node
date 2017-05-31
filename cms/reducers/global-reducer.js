import { compose, combineReducers } from 'redux'
import {Map, fromJS} from 'immutable'

function setState(state, newState) {
  if(newState)
    return state.merge(newState);
  else
    return state;
}

function setRequestError(state, error) {
  console.error(error)
  return state
}

export default function globalReducer(state=Map(), action) {
  switch(action.type){
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SET_REQUEST_ERROR':
      return setRequestError(state, action.error)
    default: {
      return state;
    }
  }
}
