import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import Permissions, { PERMISSIONS } from 'react-native-permissions';
import Layout from './src/layouts/Layout';

const App = () => {
  const [permissionsStorage, setPermissionsStorage] = useState('');


  useEffect(() => {
    Permissions.request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((response) => {
      setPermissionsStorage(response);
    });
  }, []);

  return (
    <Provider store={store}>
      <Layout />
    </Provider >
  );
}

export default App;
