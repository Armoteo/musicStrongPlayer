import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Permissions, { PERMISSIONS } from 'react-native-permissions';
import MainScreen from './src/screens/MainScreen';
import RadioScreen from './src/screens/RadioScreens';
import { Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = () => {
  const [permissionsStorage, setPermissionsStorage] = useState('');
  const Drawer = createDrawerNavigator();

  useEffect(() => {
    Permissions.request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((response) => {
      setPermissionsStorage(response);
    });
  }, []);

  const DrawerCustoms = (props) => (
    <DrawerContentScrollView {...props}>

      <Button
        title="Help"
        onPress={() => props.navigation.navigate('RadioScreen')}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('RadioScreen')}
      >
        <Text style={{ color: 'red' }}>hghghgh</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  )

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          backBehavior='initialRoute'
          drawerStyle={{
            backgroundColor: '#2B2B2B',
          }}
          drawerContent={props => <DrawerCustoms {...props} />}
        >
          <Drawer.Screen name="Home" component={MainScreen} />
          <Drawer.Screen name="RadioScreen" component={RadioScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider >
  );
}

export default App;
