import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { ScreenState } from './src/context/screen/ScreenState';
import Permissions, { PERMISSIONS } from 'react-native-permissions';
import Layout from './src/layouts/Layout';
import MusicFiles from 'react-native-get-music-files';

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
