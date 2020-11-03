import React, { useContext, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import ControlPanel from '../components/ControlPanel';
import Navbar from '../components/Navbar';
import { ScreenContext } from '../context/screen/screenContext';
import MainScreen from '../screens/MainScreen';


export const Layout = () => {
  const { screenId, changeScreen } = useContext(ScreenContext)
  const [play, setPlay] = useState(false);

  return (<SafeAreaView>
    <View style={styles.container}>
      <Navbar title="Strong player" />
      {screenId === 1 ? <MainScreen /> : <MainScreen />}
      <ControlPanel play={play} />
    </View>
  </SafeAreaView >)
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    justifyContent: 'space-between'
  }
});

