import React from 'react';
import {
  SafeAreaView, StyleSheet, Text,
  TouchableOpacity, View, Image, ImageBackground
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { ThemeColor } from '../theme/themeColor';
import ContainerItem from './ContainerItem';
import ItemMenuDrawer from './ItemMenuDrawer';
import ControlPlayer from '../hooks/ControlPlayer';

const DrawerCustom = (props) => {
  const { stopPlayer } = ControlPlayer();
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.containerBackground}
          source={require('../../assets/fon_header.png')}
        >
          <Image
            style={styles.headerIcon}
            source={require('../../assets/ic_mynotka-web.png')}
          />
          <Text style={styles.textHeaderBar}>Strong player</Text>
        </ImageBackground>
        <ContainerItem
          header="Плейлист"
          itemFirst="Новый список"
          itemSecond="Открыть список"
        />
        <ContainerItem
          header="Опции плеера"
          itemFirst="Открыть папку"
          itemSecond="FM online"
          secondItemClick={() => props.navigation.navigate('RadioScreen')}
        />
        <ItemMenuDrawer
          text="Информация"
        />
        <ItemMenuDrawer
          clickMenu={stopPlayer}
          text="Выход"
        />
      </SafeAreaView>
    </DrawerContentScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 0,
  },
  containerBackground: {
    width: '100%',
    height: 130,
    marginTop: -3
  },
  headerIcon: {
    width: 60,
    height: 60,
    marginLeft: 10,
    marginTop: 10
  },
  textHeaderBar: {
    color: ThemeColor.mainColor,
    fontSize: 24,
    fontStyle: 'italic',
    marginTop: 10,
    marginLeft: 10
  },
});

export default DrawerCustom;