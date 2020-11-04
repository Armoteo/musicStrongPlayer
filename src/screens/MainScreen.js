import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { loadSongs } from '../store/actions/songListAction';
import ListMusic from '../components/ListMusic';

const MainScreen = ({ loadSongs, songList }) => {
  const [songArray, setSongArray] = useState([]);

  useEffect(() => {
    loadSongs();
  }, []);

  console.log(songList)

  return (
    <View>
      <ListMusic songList={songList} />
    </View>
  )
}

MainScreen.defaultProps = {
  loadSongs: () => { },
  songList: []
};

MainScreen.propTypes = {
  loadSongs: PropTypes.func,
  songList: PropTypes.arrayOf(PropTypes.shape({}))
};

const styles = StyleSheet.create({

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