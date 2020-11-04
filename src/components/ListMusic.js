import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Song from './Song';

const ListMusic = ({ songList }) => (
  <View style={styles.container}>
    <FlatList
      data={songList}
      renderItem={({ item }) => (
        <Song
          name={item.title}
          artist={item.author}
          duration={item.duration}
        />
      )}
      keyExtractor={index => index.title}
    />
  </View>
);


{/* <FlatList
        contentContainerStyle={{ paddingBottom: 220 }}
        data={filterData}
        renderItem={({ item }) =>
          (<Card
            itemData={item}
            onClick={this.clickEditBtn}
            onDelete={this.onDelete}
          />)
        }
        keyExtractor={item => item.id.toString()}
      /> */}


ListMusic.defaultProps = {
  songList: {}
};

ListMusic.propTypes = {
  songList: PropTypes.arrayOf(PropTypes.shape({}))
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
});

export default ListMusic;

