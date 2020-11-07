import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListMusic from '../components/ListMusic';

const MainScreen = ({ clickSong, songList, idSong }) => (
    <View style={styles.container}>
      <ListMusic
        songList={songList.songList}
        clickSong={clickSong}
      />
    </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 2
  }
});

export default MainScreen;

