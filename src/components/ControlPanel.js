import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';

const ControlPanel = ({ play, pause, playPlayer, nextSong, prevSong }) => (
  <View style={styles.container}>
    <View style={styles.buttonBox}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={prevSong}
      >
        <Image
          style={styles.btnControl}
          source={require('../../assets/ic_prev_o-web.png')}
        />
      </TouchableOpacity>
      {!play && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={playPlayer}
        >
          <Image
            style={styles.btnControl}
            source={require('../../assets/ic_play_o-web.png')}
          />
        </TouchableOpacity>)}
      {play && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={pause}
        >
          <Image
            style={styles.btnControl}
            source={require('../../assets/ic_pause_o-web.png')}
          />
        </TouchableOpacity>)}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={nextSong}
      >
        <Image
          style={styles.btnControl}
          source={require('../../assets/ic_next_o-web.png')}
        />
      </TouchableOpacity>
    </View>
  </View>
);

ControlPanel.defaultProps = {
  play: false,
  playPlayer: () => { },
  nextSong: () => { },
  prevSong: () => { },
  pause: () => { },
};

ControlPanel.propTypes = {
  play: PropTypes.bool,
  playPlayer: PropTypes.func,
  nextSong: PropTypes.func,
  prevSong: PropTypes.func,
  pause: PropTypes.func,

};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    backgroundColor: '#2B2B2B',
    borderTopColor: '#F98E00',
    borderTopWidth: 2,
    justifyContent: 'center',
  },
  buttonBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  btnControl: {
    width: 60,
    height: 60
  }
});

export default ControlPanel;