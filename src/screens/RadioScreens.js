import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Navbar from '../components/Navbar';
import ControlPlayer from '../hooks/ControlPlayer';
import { ThemeColor } from '../theme/themeColor';
import { Picker } from '@react-native-picker/picker';
import ControlPanelRadio from '../components/ControlPanelRadio';
import PanelRadio from '../components/PanelRadio';

const RadioScreens = ({ navigation }) => {
  const { stopPlayer } = ControlPlayer();
  const [select, setSelecet] = useState('Choose stantion');

  const siderBar = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      <Navbar
        title="StrongPlayer"
        stopPlayer={stopPlayer}
        siderBar={siderBar}
      />
      <View style={styles.radioConteiner}>
        <View style={styles.header}>
          <PanelRadio />
          <Picker
            selectedValue={select}
            style={styles.picker}
            dropdownIconColor='#725D24'
            onValueChange={(itemValue, itemIndex) =>
              setSelecet(itemValue)
            }>
            <Picker.Item label="Hit Fm" value="java2" />
            <Picker.Item label="Radio Rock" value="js" />
          </Picker>
        </View>
        <Image
          style={styles.logo}
          source={require('../../assets/ic_mynotka-web.png')}
        />
      </View>
      <ControlPanelRadio />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.backgroundMainColor,
    height: '100%',
    justifyContent: 'space-between'
  },
  radioConteiner: {
    width: '100%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  header: {
    width: '100%',
    alignItems: 'center',
  },
  picker: {
    width: '70%',
    height: 40,
    color: '#725D24',
    transform: [
      { scaleX: 1.4 },
      { scaleY: 1.4 },
    ]
  },
  logo: {
    width: '70%',
    height: '60%'
  }
});

export default RadioScreens;

