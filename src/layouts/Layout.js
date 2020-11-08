import React from 'react';
import { StyleSheet, View } from 'react-native';
import ControlPanel from '../components/ControlPanel';
import Navbar from '../components/Navbar';
import { ThemeColor } from '../theme/themeColor';

const Layout = (props) => {

  const timeConver = (duration) => {
    var pad = function (num, size) { return ('000' + num).slice(size * -1); },
      time = parseFloat(duration).toFixed(3),
      hours = Math.floor(time / 60 / 60),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60),
      milliseconds = time.slice(-3);
    const hideHours = hours !== 0 ? `${pad(hours, 2)}:` : '';
    return `${hideHours}${pad(minutes, 2)}:${pad(seconds, 2)}`;
  }

  return (
    <View style={styles.container}>
      <Navbar
        title="Strong player"
        stopPlayer={props.stopPlayer}
        navigation={props.navigation}
      />
      {props.children}
      <ControlPanel
        play={props.statusPlay}
        pause={props.pausePlayer}
        playPlayer={props.playPlayer}
        nextSong={props.nextSong}
        prevSong={props.prevSong}
        duration={props.duration}
        setPosition={props.setPosition}
        totalDuration={props.totalDuration}
        positionTime={timeConver(props.duration)}
        totalTime={timeConver(props.totalDuration)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: ThemeColor.backgroundMainColor,
    justifyContent: 'space-between'
  }
});


export default Layout;

