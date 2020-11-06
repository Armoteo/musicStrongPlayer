import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import Slider from 'react-native-slider';

const ControlPanel = ({
  play, pause, playPlayer, nextSong, prevSong, duration,
  setPosition, totalDuration, totalTime, positionTime }) => (
    <View style={styles.container}>
      <View style={styles.timeBar}>
        <Text style={styles.time}>{positionTime}</Text>
        <Text style={styles.time}>{totalTime}</Text>
      </View>
      <View style={styles.seekbar}>
        <Slider
          value={duration}
          onValueChange={(value) => setPosition(value)}
          minimumValue={0}
          maximumValue={totalDuration}
          thumbTintColor={'#F98E00'}
          maximumTrackTintColor={'#F98E00'}
          minimumTrackTintColor={'#F98E00'}
          thumbTouchSize={{ width: 40, height: 40 }}
          style={styles.slider}
        />
      </View>
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
  setPosition: () => { },
  duration: 0,
  totalDuration: 0,
  totalTime: '00.00',
  positionTime: '00.00',
};

ControlPanel.propTypes = {
  play: PropTypes.bool,
  playPlayer: PropTypes.func,
  nextSong: PropTypes.func,
  prevSong: PropTypes.func,
  pause: PropTypes.func,
  setPosition: PropTypes.func,
  duration: PropTypes.number,
  totalDuration: PropTypes.number,
  totalTime: PropTypes.string,
  positionTime: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 130,
    backgroundColor: '#2B2B2B',
    borderTopColor: '#F98E00',
    borderTopWidth: 2,
    justifyContent: 'flex-end'
  },
  buttonBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnControl: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  seekbar: {
    width: '100%',
    paddingHorizontal: 20,
  },
  slider: {
    width: '100%',
  },
  timeBar: {
    width: '100%',
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
    color: '#ffffff',
    fontSize: 18
  }
});

export default ControlPanel;