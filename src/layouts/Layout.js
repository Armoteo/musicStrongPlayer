import React, { useContext, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import ControlPanel from '../components/ControlPanel';
import Navbar from '../components/Navbar';
import { ScreenContext } from '../context/screen/screenContext';
import MainScreen from '../screens/MainScreen';
import TrackPlayer from 'react-native-track-player';

const pause = () => {
  TrackPlayer.pause();
};

export const Layout = () => {
  const { screenId, changeScreen } = useContext(ScreenContext)
  const [play, setPlay] = useState(false);

  return (<SafeAreaView>
    <View style={styles.container}>
      <Navbar title="Strong player" />
      {screenId === 1 ? <MainScreen /> : <MainScreen />}
      <ControlPanel play={play} pause={pause} />
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

