import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { loadSongs } from '../store/actions/songListAction';

const MainScreen = ({loadSongs, songList}) =>{

  console.log(songList);
  useEffect(()=>{
    loadSongs();
  },[]);

  return(
    <View>
      <Text>get songs MainScreen</Text>
    </View> 
  )
} 

MainScreen.defaultProps = {
  
};

MainScreen.propTypes = {

};

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
  return {
    songList: state.songList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSongs: () => dispatch(loadSongs()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);