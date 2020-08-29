import React, { Component } from 'react';
import { StyleSheet, Text, View, DeviceEventEmitter, Alert } from 'react-native';
import Permissions, { PERMISSIONS } from 'react-native-permissions';
import MusicFiles from 'react-native-get-music-files';

class App extends Component {
  state = {
    songs: [],
    photoPermission: ''
  }
  componentDidMount() {
    Permissions.request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((response) => {
      this.setState({ photoPermission: response });
      if(response === 'granted') {
        this.getSongs();
      }
    });
  }


  getSongs = () => {
    MusicFiles.getAll({
      blured : true, 
      artist : true,
      duration : true, 
      cover : false, 
      genre : true,
      title : true,
      minimumSongDuration : 10000,
      fields : ['title','albumTitle','genre','lyrics','artwork','duration']
  }).then(tracks => {
      // do your stuff...
      this.setState({songs: tracks})
  }).catch(error => {
      // catch the error
      console.log(error)
  })
  };



  render() {
    console.log(this.state.songs)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>get songs2</Text>
      </View> 
    );
  }
}

const styles = StyleSheet.create({});

export default App;

// {
//   id : 1,
//   title : "La danza del fuego",
//   author : "Mago de Oz",
//   album : "Finisterra",
//   genre : "Folk",
//   duration : 132132312321, // miliseconds
//   cover : "file:///sdcard/0/123.png",
//   blur : "file:///sdcard/0/123-blur.png", //Will come null if createBLur is set to false
//   path : "/sdcard/0/la-danza-del-fuego.mp3"
// }
