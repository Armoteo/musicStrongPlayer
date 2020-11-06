import { useEffect } from 'react';
import TrackPlayer, { } from 'react-native-track-player';
import { useSelector, useDispatch } from 'react-redux';
import { setIdSong, setStatusDuration, setStatusPlay, setStatusTotalDuration } from '../store/actions/controlPlayerAction';
import { loadSongs } from '../store/actions/songListAction';
import { BackHandler } from 'react-native';

const ControlPlayer = () => {
  const songList = useSelector(state => state.songList);
  const statusPlay = useSelector(state => state.controlState.statusPlay);
  const idSong = useSelector(state => state.controlState.idSong);
  const duration = useSelector(state => state.controlState.duration);
  const totalDuration = useSelector(state => state.controlState.totalDuration);

  const dispatch = useDispatch();

  const tracks = songList.songList.map((item, index) => {
    return {
      id: '' + index,
      url: item.path,
      title: item.title,
      artist: item.author,
      artwork: item.cover
    }
  });

  const getPosition = async () => {
    let position = await TrackPlayer.getPosition();
    dispatch(setStatusDuration(position))
  }

  const setPosition = (pos) => {
    TrackPlayer.seekTo(pos);
  }

  const handleStatusPlay = (status) => {
    dispatch(setStatusPlay(status));
  }

  const getCurrentTrackID = async () => {
    let trackId = await TrackPlayer.getCurrentTrack();
    dispatch(setIdSong(trackId));
  }

  const prepearPlayer = async () => {
    songList && TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.reset();
      await TrackPlayer.add(tracks);
      getCurrentTrackID();
    });
  }

  const playPlayer = () => {
    TrackPlayer.play();
    handleStatusPlay(true);
  };

  const pausePlayer = () => {
    handleStatusPlay(false);
    TrackPlayer.pause();
  }

  const handleBackButtonClick = () => {
    BackHandler.exitApp();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
  })

  const stopPlayer = () => {
    handleStatusPlay(false);
    TrackPlayer.stop();
    handleBackButtonClick();
  }

  const clickSong = (id) => {
    dispatch(setIdSong(`${id}`));
    (statusPlay && `${id}` === idSong) ? pausePlayer() : playPlayer();
  };

  const prevSong = () => {
    TrackPlayer.skipToPrevious();
    getCurrentTrackID();
  }

  const nextSong = () => {
    TrackPlayer.skipToNext();
    getCurrentTrackID();
  }

  const getTotalDuration = async () => {
    let duration = await TrackPlayer.getDuration();
    dispatch(setStatusTotalDuration(duration));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getPosition();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    prepearPlayer();
  }, [songList])

  useEffect(() => {
    getTotalDuration();
  }, [idSong])

  console.log(idSong)

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  useEffect(() => {
    TrackPlayer.skip(idSong);
  }, [idSong]);

  return {
    playPlayer, pausePlayer, prevSong, idSong, totalDuration, stopPlayer,
    nextSong, songList, clickSong, statusPlay, duration, setPosition
  };
}

export default ControlPlayer;