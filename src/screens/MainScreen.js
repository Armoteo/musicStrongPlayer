import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { loadSongs } from '../store/actions/songListAction';
import { setIdSong } from '../store/actions/controlPlayerAction';
import ListMusic from '../components/ListMusic';
import TrackPlayer from 'react-native-track-player';

const MainScreen = ({ loadSongs, songList, setIdSong }) => {

  useEffect(() => {
    loadSongs();
  }, [songList]);

  const clickSong = (id) => {
    setIdSong(id);
  };

  const playPlayer = () => {
    // TrackPlayer.setupPlayer().then(async () => {
    //   await TrackPlayer.add({
    //     id: 'trackId',
    //     url: `${songList.songList[idSongPlay].path}`,
    //     title: songList.songList[idSongPlay].title,
    //     artist: songList.songList[idSongPlay].author,
    //     artwork: `${songList.songList[idSongPlay].cover}`
    //   });
    // });
    // TrackPlayer.play();
  };

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
  setIdSong: () => { },
  songList: {}
};

MainScreen.propTypes = {
  loadSongs: PropTypes.func,
  setIdSong: PropTypes.func,
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
    setIdSong: (id) => dispatch(setIdSong(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

