import { useEffect, useState } from 'react';
import TrackPlayer, { } from 'react-native-track-player';
import { useSelector, useDispatch } from 'react-redux';
import { setIdSong, setStatusPlay } from '../store/actions/controlPlayerAction';
import { loadSongs } from '../store/actions/songListAction';

const ControlPlayer = () => {
  const songList = useSelector(state => state.songList);
  const statusPlay = useSelector(state => state.controlState.statusPlay);
  const idSong = useSelector(state => state.controlState.idSong);

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

  const [duration, setDuration] = useState(0);

  const getData = async () => {
    let position = await TrackPlayer.getPosition();
    setDuration(position);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  console.log(duration);

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
      TrackPlayer.play();
      getCurrentTrackID();
    });
  }

  const playPlayer = () => {
    prepearPlayer();
    handleStatusPlay(true);
  };

  const pausePlayer = () => {
    handleStatusPlay(false);
    TrackPlayer.pause();
  }

  const clickSong = (id) => {
    dispatch(setIdSong(`${id}`));
  };

  const prevSong = () => {
    TrackPlayer.skipToPrevious();
    getCurrentTrackID();
  }

  const nextSong = () => {
    TrackPlayer.skipToNext();
    getCurrentTrackID();
  }

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  useEffect(() => {
    TrackPlayer.skip(idSong);
  }, [idSong]);

  return {
    playPlayer, pausePlayer, prevSong, idSong,
    nextSong, songList, clickSong, statusPlay, duration
  };
}

export default ControlPlayer;