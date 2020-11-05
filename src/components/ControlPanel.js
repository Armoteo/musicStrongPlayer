import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { SliderPicker } from 'react-native-slider-picker';

const ControlPanel = ({ play, pause, playPlayer, nextSong, prevSong, duration, setPosition }) => (
  <View style={styles.container}>
    <View style={styles.seekbar}>
      <SliderPicker
        maxValue={100}
        callback={position => {
          setPosition(position)
        }}
        defaultValue={duration}
        fillColor={'#F98E00'}
        labelFontColor={"#725D24"}
        buttonBackgroundColor={'#F98E00'}
        buttonBorderColor={"#F98E00"}
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
  duration: 0
};

ControlPanel.propTypes = {
  play: PropTypes.bool,
  playPlayer: PropTypes.func,
  nextSong: PropTypes.func,
  prevSong: PropTypes.func,
  pause: PropTypes.func,
  setPosition: PropTypes.func,
  duration: PropTypes.number

};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 130,
    backgroundColor: '#2B2B2B',
    borderTopColor: '#F98E00',
    borderTopWidth: 2,
    justifyContent: 'center',
  },
  buttonBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1
  },
  btnControl: {
    width: 50,
    height: 50,
  },
  seekbar: {
    width: '100%',
    flex: 1
  }
});

export default ControlPanel;