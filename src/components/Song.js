import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Song = ({ name, artist, duration }) => {

  const converTime = (milisecond) => {
    let minutes = Math.floor(milisecond / 60000);
    let seconds = ((milisecond % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <TouchableOpacity style={styles.container}>
      {/* <View style={styles.container}> */}
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.artist}>
        {artist}
      </Text>
      <Text style={styles.duration}>
        {converTime(duration)}
      </Text>
      {/* </View> */}
    </TouchableOpacity>
  )
};

Song.defaultProps = {
  name: '',
  artist: '',
  duration: 0
};

Song.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  duration: PropTypes.number

};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  name: {
    fontSize: 18,
    color: '#725D24'
  },
  artist: {
    fontSize: 15,
    color: '#725D24'
  },
  duration: {
    fontSize: 10,
    color: '#725D24',
    position: 'absolute'
  }

});

export default Song;