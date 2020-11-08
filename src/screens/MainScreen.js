import React from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from '../layouts/Layout';
import ListMusic from '../components/ListMusic';
import ControlPlayer from '../hooks/ControlPlayer';

const MainScreen = ({ navigation }) => {
  const { statusPlay, pausePlayer, playPlayer, clickSong,
    songList, idSong, nextSong, prevSong, duration, setPosition,
    totalDuration, stopPlayer } = ControlPlayer();

  return (
    <Layout
      clickSong={clickSong}
      songList={songList}
      idSong={idSong}
      statusPlay={statusPlay}
      pausePlayer={pausePlayer}
      playPlayer={playPlayer}
      nextSong={nextSong}
      prevSong={prevSong}
      duration={duration}
      setPosition={setPosition}
      totalDuration={totalDuration}
      stopPlayer={stopPlayer}
      navigation={navigation}
    >
      <View style={styles.container}>
        <ListMusic
          songList={songList.songList}
          clickSong={clickSong}
        />
      </View>
    </Layout>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 2
  }
});

export default MainScreen;

