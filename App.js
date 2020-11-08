import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import Permissions, { PERMISSIONS } from 'react-native-permissions';
import RadioScreen from './src/screens/RadioScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import Navbar from './src/components/Navbar';
import { ThemeColor } from './src/theme/themeColor';

const App = () => {
  const [permissionsStorage, setPermissionsStorage] = useState('');
  const Stack = createStackNavigator();

  useEffect(() => {
    Permissions.request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((response) => {
      setPermissionsStorage(response);
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          // screenOptions={{
          //   title: 'Strong player',
          //   headerStyle: {
          //     backgroundColor: ThemeColor.navbarColor,
          //   },
          //   headerTintColor: ThemeColor.mainFont,
          //   headerTitleStyle: {
          //     fontSize: 20,
          //     fontStyle: 'italic',
          //     fontWeight: 'bold'
          //   }
          // }}
          screenOptions={{ headerTitle: props => <Navbar {...props} /> }}
        >
          <Stack.Screen
            name="Home"
            component={MainScreen}
          />
          <Stack.Screen name="RadioScreen" component={RadioScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider >
  );
}

export default App;
