import { SET_ID_SONG, SET_STATUS_PLAY } from '../types';

const initialState = {
  statusPlay: false,
  idSong: '0',
}

export const controlPLayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID_SONG: return {
      ...state, idSong: action.payload
    }
    case SET_STATUS_PLAY: return {
      ...state, statusPlay: action.payload
    }
    default: return state
  }
}