import { LOAD_SONGS } from '../types'
import { subscribe } from '../subscribe';
import { setSongsList } from '../actions/songListAction';
import MusicFiles from 'react-native-get-music-files';


const fetchWorker = ({
  action,
  next,
  dispatch
}) => {
  MusicFiles.getAll({
    // id: true,
    blured: true,
    artist: true,
    duration: true,
    cover: false,
    genre: true,
    title: true,
    minimumSongDuration: 10000,
    fields: ['title', 'albumTitle', 'genre', 'lyrics', 'artwork', 'duration']
  }).then(tracks => {
    dispatch(setSongsList(tracks))
  }).catch(error => {
    alert(error.message);
  })
};


const fetchSongList = ({ dispatch }) => (next) =>
  subscribe(LOAD_SONGS, fetchWorker)(next, dispatch);


export const songListMiddleWare = [fetchSongList];