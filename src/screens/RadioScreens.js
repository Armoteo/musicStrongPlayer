import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Navbar from '../components/Navbar';
import ControlPlayer from '../hooks/ControlPlayer';
import { ThemeColor } from '../theme/themeColor';

const RadioScreens = ({navigation}) => {
  const { stopPlayer } = ControlPlayer();

    const siderBar = () => {
      navigation.openDrawer();
    }
  return(
  <View style={styles.container}>
    <Navbar
      title="StrongPlayer"
      stopPlayer={stopPlayer}
      siderBar={siderBar}
    />
  </View>
)}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.backgroundMainColor,
    height: '100%',
    justifyContent: 'space-between'
  }
});

export default RadioScreens;

