import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Permissions from 'react-native-permissions';
import MusicFiles from 'react-native-get-music-files';

class App extends Component {
  componentDidMount() {
    Permissions.request('storage').then((response) => {
      this.setState({ photoPermission: response });
    });
  }

  _getSongs = () => {
    Alert.alert('seen');
    MusicFiles.getAll({})
      .then((tracks) => {
        console.log(tracks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text onPress={this._getSongs}>get songs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
