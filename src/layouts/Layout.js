import React, { useContext, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ControlPanel from '../components/ControlPanel';
import MainScreen from '../screens/MainScreen';
import RadioScreen from '../screens/RadioScreens';
import ControlPlayer from '../hooks/ControlPlayer';
import { ThemeColor } from '../theme/themeColor';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  const Stack = createStackNavigator();
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

  const Main = () => (
    <MainScreen
      clickSong={clickSong}
      idSong={idSong}
      songList={songList}
    />
  );

  return (<SafeAreaView>
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: 'Strong player',
            headerStyle: {
              backgroundColor: ThemeColor.navbarColor,
            },
            headerTintColor: ThemeColor.mainFont,
            headerTitleStyle: {
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: 'bold',

            },
            headerRight: () => (
              <TouchableOpacity
                style={styles.iconExit}
                onPress={stopPlayer}
              >
                <FontAwesomeIcon icon={faTimes} size={24} />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity style={styles.iconLeft} >
                <FontAwesomeIcon icon={faBars} size={20} />
              </TouchableOpacity>
            )
          }}
        >
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="RadioScreen" component={RadioScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
    justifyContent: 'space-between'
  },
  iconLeft: {
    marginLeft: 20
  },
  iconExit: {
    marginRight: 20
  }
});


export default Layout;