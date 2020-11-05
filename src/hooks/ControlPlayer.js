import { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import { useSelector, useDispatch } from 'react-redux';
import { setIdSong, setStatusPlay } from '../store/actions/controlPlayerAction';
import { loadSongs } from '../store/actions/songListAction';

const ControlPlayer = () => {
  const songList = useSelector(state => state.songList);
  const statusPlay = useSelector(state => state.controlState.statusPlay);
  const idSong = useSelector(state => state.controlState.idSong);

  const dispatch = useDispatch();

  const handleStatusPlay = (status) => {
    dispatch(setStatusPlay(status));
  }

  const prepearPlayer = (idSongPlay) => {
    songList && TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.add({
        id: 'trackId',
        url: `${songList.songList[idSongPlay].path}`,
        title: songList.songList[idSongPlay].title,
        artist: songList.songList[idSongPlay].author,
        artwork: `${songList.songList[idSongPlay].cover}`
      });
    });
  }

  const playPlayer = () => {
    prepearPlayer(idSong);
    handleStatusPlay(true);
    TrackPlayer.play();
  };

  const pausePlayer = () => {
    handleStatusPlay(false);
    TrackPlayer.pause();
  }

  const clickSong = (id) => {
    dispatch(setIdSong(id));
  };

  const prevSong = () => {
    let newId = idSong;
    if (0 === newId) {
      newId = songList.songList.length - 1;
    } else {
      newId = newId - 1;
    }
    clickSong(newId);
  }

  const nextSong = () => {
    let newId = idSong;
    if (songList.songList.length - 1 <= newId) {
      newId = 0;
    } else {
      newId = newId + 1;
    }
    clickSong(newId);
  }

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  useEffect(() => {
    idSong === -1 ? handleStatusPlay(false) : playPlayer();
    return () => TrackPlayer.pause();
  }, [idSong])

  return {
    playPlayer, pausePlayer, prevSong, idSong,
    nextSong, songList, clickSong, statusPlay
  };
}

export default ControlPlayer;