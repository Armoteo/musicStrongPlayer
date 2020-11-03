import { LOAD_SONGS, SET_SONGS_LIST} from '../types';

export const loadSongs = () => ({
  type: LOAD_SONGS
});

export const setSongsList = (data) => ({
  type: SET_SONGS_LIST,
  payload: data
});