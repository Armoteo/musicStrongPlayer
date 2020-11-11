import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Navbar from '../components/Navbar';
import ControlPlayer from '../hooks/ControlPlayer';
import { ThemeColor } from '../theme/themeColor';
import Dropdown from 'react-native-modal-select-option';

const RadioScreens = ({ navigation }) => {
  const { stopPlayer } = ControlPlayer();
  const [propsDropdown, setPropsDropdown] = useState({
    defaultValue: { value: 5, label: 'Kebumen' },
    options: [
      { value: 1, label: 'Bandung' },
      { value: 2, label: 'Surabaya' },
      { value: 3, label: 'Palembang' },
      { value: 4, label: 'Jakarta' },
    ],
    label: 'Your City',
    animationType: 'none',
  });
  const [selectedOption, setSelectedOption] = useState(
    propsDropdown.defaultValue || { value: 0, label: 'Pilih Kota' }
  );
  const [isShowingOptions, setIsShowingOptions] = useState(false);

  const siderBar = () => {
    navigation.openDrawer();
  }

  const onSelect = (item, isShow) => {
    setIsShowingOptions(isShow);
    setSelectedOption(item);

  };

  const onShow = (value) => {
    setIsShowingOptions(value);
  };


  return (
    <View style={styles.container}>
      <Navbar
        title="StrongPlayer"
        stopPlayer={stopPlayer}
        siderBar={siderBar}
      />
      <Dropdown {...propsDropdown}
        onSelect={onSelect}
        onShow={onShow}
        isShowingOptions={isShowingOptions}
        selectedOption={selectedOption}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.backgroundMainColor,
    height: '100%',
    justifyContent: 'space-between'
  }
});

export default RadioScreens;

