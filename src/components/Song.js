import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeColor } from '../theme/themeColor';

const Song = ({ name, artist, duration, id, clickSong }) => {

  const converTime = (milisecond) => {
    let minutes = Math.floor(milisecond / 60000);
    let seconds = ((milisecond % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => clickSong(id)}
    >
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.artist}>
        {artist}
      </Text>
      <Text style={styles.duration}>
        {converTime(Number(duration))}
      </Text>
    </TouchableOpacity>
  )
};

Song.defaultProps = {
  name: '',
  artist: '',
  duration: '',
  id: 0,
  clickSong: () => { }
};

Song.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  duration: PropTypes.string,
  clickSong: PropTypes.func,
  id: PropTypes.number
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: 'rgba(50, 50, 50, 0.5)',
    marginVertical: 1
  },
  name: {
    fontSize: 18,
    color: ThemeColor.songFont
  },
  artist: {
    fontSize: 14,
    color: ThemeColor.songFont
  },
  duration: {
    fontSize: 15,
    color: ThemeColor.songFont,
    position: 'absolute',
    right: 10,
    top: '50%'
  }

});

export default Song;