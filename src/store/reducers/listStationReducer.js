import { SET_LIST_STATION } from '../types';

const initialState = {
  listStation: []
}

export const listStationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_STATION: return {
      ...state, listStation: action.payload
    }
    default: return state
  }
}