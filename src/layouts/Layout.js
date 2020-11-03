import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { ScreenContext } from '../context/screen/screenContext';
import MainScreen from '../screens/MainScreen';


export const Layout = () => {
  const { screenId, changeScreen } = useContext(ScreenContext)

  return (<SafeAreaView>
    <View style={styles.container}>
      {screenId === 1 ? <MainScreen /> : <MainScreen />}
    </View>
  </SafeAreaView >)
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    backgroundColor: '#EFEFEF'
  }
});

