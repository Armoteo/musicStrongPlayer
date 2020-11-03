import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const MainScreen = () =>{
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

export default MainScreen;