import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListMusic from '../components/ListMusic';
import { ThemeColor } from '../theme/themeColor';

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
    flex: 2,
    backgroundColor: ThemeColor.backgroundMainColor,
  }
});

export default MainScreen;