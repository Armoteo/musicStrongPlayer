import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const RadioScreens = (props) => (
  <View style={styles.container}>
    <Text>RADIO</Text>
    <Button
      title="BACK MAIN"
      onPress={() =>
        props.navigation.navigate('Home')
      }
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 2
  }
});

export default RadioScreens;

