import { LOAD_SONGS } from '../types'
import { subscribe } from '../subscribe';
import { setSongsList } from '../actions/songListAction';
import MusicFiles from 'react-native-get-music-files';


const fetchWorker = ({
  action,
  next,
  dispatch
}) => {
  console.log("songsList 777")
   MusicFiles.getAll({
    blured : true, 
    artist : true,
    duration : true, 
    cover : false, 
    genre : true,
    title : true,
    minimumSongDuration : 10000,
    fields : ['title','albumTitle','genre','lyrics','artwork','duration']
}).then(tracks => {
    dispatch(setSongsList(tracks))
}).catch(error => {
    // catch the error
    console.log(error)
}) 
};


const fetchSongList = ({ dispatch }) => (next) =>
  subscribe(LOAD_SONGS, fetchWorker)(next, dispatch);


export const songListMiddleWare = [fetchSongList];