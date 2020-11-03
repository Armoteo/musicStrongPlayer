import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { ScreenState } from './src/context/screen/ScreenState';
import Permissions, { PERMISSIONS } from 'react-native-permissions';
import { Layout } from './src/layouts/Layout';

const App = () => {
  const [permissionsStorage, setPermissionsStorage] = useState('');

  useEffect(() => {
    Permissions.request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((response) => {
      setPermissionsStorage(response);
    });
  }, []);

  return (
    <Provider store={store}>
      <ScreenState>
        {permissionsStorage === 'granted' && <Layout />}
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
