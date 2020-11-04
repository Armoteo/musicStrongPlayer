import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { loadSongs } from '../store/actions/songListAction';
import ListMusic from '../components/ListMusic';
import TrackPlayer from 'react-native-track-player';

const MainScreen = ({ loadSongs, songList }) => {
  const [idSongPlay, setIdSongPlay] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    loadSongs();
  }, []);

  const clickSong = (id) => {
    setIdSongPlay(id);
  };
  console.log(songList.songList[idSongPlay].path)

  const playPlayer = () => {
    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.add({
        id: 'trackId',
        url: `${songList.songList[idSongPlay].path}`,
        title: songList.songList[idSongPlay].title,
        artist: songList.songList[idSongPlay].author,
        artwork: `${songList.songList[idSongPlay].cover}`
      });
    });
    TrackPlayer.play();
  };

  const pause = () => {
    TrackPlayer.pause();
  };

  useEffect(() => {
    playPlayer();
  }, [idSongPlay]);

  return (
    <View style={styles.container}>
      <ListMusic
        songList={songList.songList}
        clickSong={clickSong}
      />
    </View>
  )
}

MainScreen.defaultProps = {
  loadSongs: () => { },
  songList: {}
};

MainScreen.propTypes = {
  loadSongs: PropTypes.func,
  songList: PropTypes.shape({
    songList: PropTypes.arrayOf(PropTypes.shape({}))
  })
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 2
  }
});

const mapStateToProps = (state) => {
  return {
    songList: state.songList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSongs: () => dispatch(loadSongs()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

// {
//   id : 1,
//   title : "La danza del fuego",
//   author : "Mago de Oz",
//   album : "Finisterra",
//   genre : "Folk",
//   duration : 132132312321, // miliseconds
//   cover : "file:///sdcard/0/123.png",
//   blur : "file:///sdcard/0/123-blur.png", //Will come null if createBLur is set to false
//   path : "/sdcard/0/la-danza-del-fuego.mp3"
// }
