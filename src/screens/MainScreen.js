import React from 'react';
import { StyleSheet, View } from 'react-native';
import ControlPanel from '../components/ControlPanel';
import ListMusic from '../components/ListMusic';
import Navbar from '../components/Navbar';
import ControlPlayer from '../hooks/ControlPlayer';
import { ThemeColor } from '../theme/themeColor';

const MainScreen = ({ navigation }) => {
  const { statusPlay, pausePlayer, playPlayer, clickSong,
    songList, idSong, nextSong, prevSong, duration, setPosition,
    totalDuration, stopPlayer } = ControlPlayer();

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

  const siderBar = () => {
    navigation.openDrawer();
  }

  return (<View style={styles.container}>
    <Navbar
      title="StrongPlayer"
      stopPlayer={stopPlayer}
      siderBar={siderBar}
    />
    <ListMusic
      songList={songList.songList}
      clickSong={clickSong}
    />
    <ControlPanel
      play={statusPlay}
      pause={pausePlayer}
      playPlayer={playPlayer}
      nextSong={nextSong}
      prevSong={prevSong}
      duration={duration}
      setPosition={setPosition}
      totalDuration={totalDuration}
      positionTime={timeConver(duration)}
      totalTime={timeConver(totalDuration)}
    />
  </View>)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.backgroundMainColor,
    height: '100%',
    justifyContent: 'space-between'
  }
});

export default MainScreen;