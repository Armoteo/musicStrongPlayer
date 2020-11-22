import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { ThemeColor } from '../../theme/themeColor';

const AppButton = ({
  children, onPress, color, colorText, textTransform
}) => {
  const Wrapper =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Wrapper onPress={onPress} activeOpacity={0.7}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <Text style={{
          ...styles.text,
          color: colorText,
          textTransform: textTransform
        }}>{children}</Text>
      </View>
    </Wrapper >
  );
};

AppButton.defaultProps = {
  children: '',
  onPress: () => { },
  color: ThemeColor.mainColor,
  colorText: ThemeColor.mainFont,
  textTransform: 'none'
};

AppButton.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string,
  colorText: PropTypes.string,
  textTransform: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
  }
});

export default AppButton;