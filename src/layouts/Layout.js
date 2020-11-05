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
    songList, idSong, nextSong, prevSong } = ControlPlayer();

  return (<SafeAreaView>
    <View style={styles.container}>
      <Navbar title="Strong player" />
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

