import { SET_ID_SONG, SET_STATUS_PLAY } from '../types';

export const setIdSong = (id) => ({
  type: SET_ID_SONG,
  payload: id
});

export const setStatusPlay = (play) => ({
  type: SET_STATUS_PLAY,
  payload: play
});