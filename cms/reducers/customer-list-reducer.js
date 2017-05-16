import { compose, combineReducers } from 'redux'
import {Map, fromJS} from 'immutable'

function setState(state, newState) {
  if(newState)
    return state.merge(newState);
  else
    return state;
}

export default function customerList(state=Map(), action) {
  switch(action.type){
    case 'SET_STATE':
      return setState(state, action.state);
    default: {
      return state;
    }
  }
}
