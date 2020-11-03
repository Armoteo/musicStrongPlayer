import { LOAD_SONGS } from '../types'
import { subscribe } from '../subscribe';
import {getSongs} from '../../utils/storageWorks';
import { setSongsList } from '../actions/songListAction';


const fetchWorker = ({
  action,
  next,
  dispatch
}) => {
  // dispatch()
  console.log("songsList")
   const songsList = getSongs();
    console.log(songsList)
  //  dispatch(setSongsList(songsList));
};


const fetchSongList = ({ dispatch }) => (next) =>
  subscribe(LOAD_SONGS, fetchWorker)(next, dispatch);


export const songListMiddleWare = [fetchSongList];