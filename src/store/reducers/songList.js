import {SET_SONGS_LIST} from '../types';

const initialState = {
  songList:[]
}

export const songListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS_LIST: return {
      ...state, songList: action.payload
    }
    default: return state
  }

}