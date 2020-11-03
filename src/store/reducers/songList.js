import {LOAD_SONGS} from '../types';

const initialState = {
  songList:[]
}

export const songListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SONGS: return {
      ...state, songList: action.payload
    }
    default: return state
  }

}