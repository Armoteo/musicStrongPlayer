import { SET_ID_SONG, SET_STATUS_PLAY, SET_STATUS_DURATION, SET_STATUS_TOTAL_DURATION } from '../types';

const initialState = {
  statusPlay: false,
  idSong: '0',
  duration: 0,
  totalDuration: 0
}

export const controlPLayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID_SONG: return {
      ...state, idSong: action.payload
    }
    case SET_STATUS_PLAY: return {
      ...state, statusPlay: action.payload
    }
    case SET_STATUS_DURATION: return {
      ...state, duration: action.payload
    }
    case SET_STATUS_TOTAL_DURATION: return {
      ...state, totalDuration: action.payload
    }
    default: return state
  }
}