import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, FlatList } from 'react-native';
import Song from './Song';

const ListMusic = ({ songList, clickSong }) => (
  <View style={styles.container}>
    <FlatList
      data={songList}
      renderItem={({ item, index }) => (
        <Song
          name={item.title}
          artist={item.author}
          duration={item.duration}
          id={`${index}`}
          clickSong={clickSong}
        />
      )}
      keyExtractor={(item, index) => [item.id, index].join('_')}
    />
  </View>
);

ListMusic.defaultProps = {
  songList: {},
  clickSong: () => { }
};

ListMusic.propTypes = {
  songList: PropTypes.arrayOf(PropTypes.shape({})),
  clickSong: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  }
});

export default ListMusic;

