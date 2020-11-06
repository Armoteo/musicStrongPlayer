import { SET_ID_SONG, SET_STATUS_DURATION, SET_STATUS_PLAY, SET_STATUS_TOTAL_DURATION } from '../types';

export const setIdSong = (id) => ({
  type: SET_ID_SONG,
  payload: id
});

export const setStatusPlay = (play) => ({
  type: SET_STATUS_PLAY,
  payload: play
});

export const setStatusDuration = (duration) => ({
  type: SET_STATUS_DURATION,
  payload: duration
});

export const setStatusTotalDuration = (totalDuration) => ({
  type: SET_STATUS_TOTAL_DURATION,
  payload: totalDuration
});