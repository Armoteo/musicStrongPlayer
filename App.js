import React, {useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { ScreenState } from './src/context/screen/ScreenState';
import Permissions, { PERMISSIONS } from 'react-native-permissions';
import MusicFiles from 'react-native-get-music-files';
import {faMapMarker} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from './src/layouts/Layout';
{/* <FontAwesomeIcon icon={icon} /> */}

const App = () => {
const [songsList, setSongsList] = useState([]);
const [permissionsStorage, setPermissionsStorage] = useState('');

 const getSongs = () => {
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
      setSongsList(tracks);
  }).catch(error => {
      // catch the error
      console.log(error)
  })
  };

  useEffect(()=>{
    Permissions.request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((response) => {
      setPermissionsStorage(response);
      if(response === 'granted') {
        getSongs();
      }
    });
  }, []);
  
  return (
    <Provider store={store}>
      <ScreenState>
        <Layout/>
      </ScreenState>
    </Provider>
  );
}

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
