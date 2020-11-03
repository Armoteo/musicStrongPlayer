import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { loadSongs } from '../store/actions/songListAction';

const MainScreen = () =>{


  useEffect(()=>{
    loadSongs();
  },[])
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>get songs2</Text>
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
    // listWeather: getCityWeather(state),
    // statusHeader: getStatusHeader(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSongs: () => dispatch(loadSongs()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);