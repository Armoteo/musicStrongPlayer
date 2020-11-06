import React, { useContext, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import ControlPanel from '../components/ControlPanel';
import Navbar from '../components/Navbar';
import { ScreenContext } from '../context/screen/screenContext';
import MainScreen from '../screens/MainScreen';
import ControlPlayer from '../hooks/ControlPlayer';

const Layout = () => {
  const { screenId, changeScreen } = useContext(ScreenContext)
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

  return (<SafeAreaView>
    <View style={styles.container}>
      <Navbar
        title="Strong player"
        stopPlayer={stopPlayer}

      />
      {screenId === 1 &&
        <MainScreen
          clickSong={clickSong}
          songList={songList}
          idSong={idSong}
        />}
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
    </View>
  </SafeAreaView >)
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#2B2B2B',
    justifyContent: 'space-between'
  }
});


export default Layout;

